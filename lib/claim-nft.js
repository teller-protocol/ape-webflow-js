const TellerV2ABI = [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"marketplaceId","type":"uint256"},{"internalType":"bytes32","name":"_metadataURI","type":"bytes32"},{"components":[{"internalType":"contract ERC20","name":"lendingToken","type":"address"},{"internalType":"uint256","name":"principal","type":"uint256"},{"components":[{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"internalType":"struct TellerV2Storage_G0.Payment","name":"totalRepaid","type":"tuple"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint32","name":"acceptedTimestamp","type":"uint32"},{"internalType":"uint32","name":"lastRepaidTimestamp","type":"uint32"},{"internalType":"uint32","name":"loanDuration","type":"uint32"}],"internalType":"struct TellerV2Storage_G0.LoanDetails","name":"loanDetails","type":"tuple"},{"components":[{"internalType":"uint256","name":"paymentCycleAmount","type":"uint256"},{"internalType":"uint32","name":"paymentCycle","type":"uint32"},{"internalType":"uint16","name":"APR","type":"uint16"}],"internalType":"struct TellerV2Storage_G0.Terms","name":"terms","type":"tuple"},{"internalType":"enum TellerV2Storage_G0.BidState","name":"state","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"borrowerBids","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"}],"name":"approveMarketForwarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"hasApprovedMarketForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_borrower","type":"address"}],"name":"getBorrowerLoanIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]

$(document).ready(() => {
    $("#nft-ready").hide()
    $("#nft-received").hide()
    $("#no-nft").show()        
    let bnplContract
    let etherscanLink
    let chainId
    let provider
    let signer
    $(document).on("click", ".claim-btn", async (evt) => {
        const bidId = $(evt.target).attr('bid-id')
        const { wait } = await bnplContract.claimNFTFromRepaidLoan(bidId) 
        const receipt = await wait()
        if (receipt.status===1)  {
            $("#nft-ready").hide()
            $("#nft-received").show()
        }
        else {
            $("#failure-tx").show()
        }   
        if (chainId == 4) {
            etherscanLink = `https://rinkeby.etherscan.io/tx/${receipt.transactionHash}` // rinkeby
        }
        if (chainId == 1) {
            etherscanLink = `https://etherscan.io/tx/${receipt.transactionHash}` 
        }
    })

    async function checkClaim() {
        let bnplAddress = '0x260C32eB38D1403bd51B83B5b7047812C70B7845' // mainnet
        if (chainId == 4) {
            bnplAddress = '0xdda8028461a69b58D72f4da46f4f050Ec2733968' // rinkeby
        }

        bnplContract = new ethers.Contract(bnplAddress, BNPLMarketABI, provider).connect(signer)
        const marketId = await bnplContract.marketId()

        // Create TellerV2 contract instance
        let tellerV2Address = '0x00182FdB0B880eE24D428e3Cc39383717677C37e' // mainnet
        if (chainId == 4) {
            tellerV2Address = '0x21d3D541937de52ac5e4aF6254d0d2134d9B7c9e' // rinkeby
        }

        const tellerV2Contract = new ethers.Contract(tellerV2Address, TellerV2ABI, provider).connect(signer)
        // Get borrower bids
        const add = await signer.getAddress() 
        const bidIds = await tellerV2Contract.getBorrowerLoanIds(add)

        const bids = (await Promise.all(bidIds.map(async(bidId) => {
                return {... (await tellerV2Contract.bids(bidId.toString())), bidId}
            })
        ))
        const marketBids = bids.filter(obj => obj.marketplaceId.toString() === marketId.toString())
        const repaidBids = marketBids.filter(obj => obj.state === 4)

        if (repaidBids.length == 0) {
            $("#nft-ready").hide()
            $("#nft-received").hide()
            $("#no-nft").show()
            console.log('No-nft')
        }

        if (repaidBids.length > 0) {
            for (let i = 0; i < repaidBids.length ; i++) {
                const escrowedTokenDetails = await bnplContract.escrowedTokensForLoan(
                repaidBids[i].bidId.toString()
                )
                if (!escrowedTokenDetails.tokenClaimed && escrowedTokenDetails.tokenAddress != "0x0000000000000000000000000000000000000000") {
                    console.log('Ready')
                    let tokenContract
                    let uri
                    let imageLink
                    // If ecrowed token type is ERC721, use tokenURI abi
                    if (escrowedTokenDetails.tokenType == 0) {
                        const tokenABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
                        tokenContract = new ethers.Contract(escrowedTokenDetails.tokenAddress, tokenABI, provider).connect(signer)
                        uri = await tokenContract.tokenURI(escrowedTokenDetails.tokenId.toString())
                        const uri2 = await fetch(uri)
                        uri = await uri2.json()
                        imageLink = uri.image
                    } else { // else use ERC1155 uri abi
                        const tokenABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
                        tokenContract = new ethers.Contract(escrowedTokenDetails.tokenAddress, tokenABI, provider).connect(signer)
                        uri = await tokenContract.uri(escrowedTokenDetails.tokenId)
                //              const ipfs = uri.replace("https://gateway.pinata.cloud", "https://ipfs.io")
                        const ipfsLink = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
                        const expres = /\/\/(.+)\//
                        ipfs = ipfsLink.match(expres)
                //              const uri1 = await fetch(`https://${ipfs[1]}/${escrowedTokenDetails.tokenId}`)
                        const uri1 = await fetch(`https://${ipfs[1]}/1`)
                        uri = await uri1.json()
                        imageLink = uri.image.replace("ipfs://", "https://ipfs.io/ipfs/")
                    }
                    const name = await tokenContract.name()
                    $("#nft-name.paragraph.left").text(`${name}`)
                    $("#nft-id.paragraph.left").text(`#${escrowedTokenDetails.tokenId}`)
                    const rowtemp = $("#claimable-nft-row-template").hide()
                    const newRow = rowtemp.clone().removeAttr("id").show()
                    rowtemp.after(newRow)
                    // Display image URL 
                    newRow.prepend(`<img id="to-claim" src=${imageLink} />`)
                    
                    const claimBtn = newRow.find(".claim-btn")
                    claimBtn.attr("bid-id", repaidBids[i].bidId)
                    claimBtn.attr("token-id", escrowedTokenDetails.tokenId)
                    $("#no-nft").hide()
                    $("#nft-received").hide()
                    $("#nft-ready").show()
                    $("#pending-tx").show()
                    $("#claim-nft").hide() 
                } else {
                    $("#nft-ready").hide()
                    $("#nft-received").hide()
                    $("#no-nft").show()
                }
            }
        }
    }

    $(window).on('connected', async(evt, prov) => {
        provider = new ethers.providers.Web3Provider(prov)
        signer = provider.getSigner()
        chainId = parseInt(prov.chainId)
        await checkClaim()
    })
})