const BNPLMarketABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[],"name":"CRA_SIGNER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"assetReceiptRegister","outputs":[{"internalType":"address","name":"assetContractAddress","type":"address"},{"internalType":"uint256","name":"assetTokenId","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bidId","type":"uint256"}],"name":"claimNFTFromDefaultedLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bidId","type":"uint256"}],"name":"claimNFTFromRepaidLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"escrowedTokensForLoan","outputs":[{"internalType":"enum BNPLMarket.TokenType","name":"tokenType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"tokenClaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchange","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"_submitBidArgs","type":"tuple"},{"components":[{"internalType":"address","name":"considerationToken","type":"address"},{"internalType":"uint256","name":"considerationIdentifier","type":"uint256"},{"internalType":"uint256","name":"considerationAmount","type":"uint256"},{"internalType":"address payable","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"internalType":"address","name":"offerToken","type":"address"},{"internalType":"uint256","name":"offerIdentifier","type":"uint256"},{"internalType":"uint256","name":"offerAmount","type":"uint256"},{"internalType":"enum BasicOrderType","name":"basicOrderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"offererConduitKey","type":"bytes32"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalAdditionalRecipients","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct AdditionalRecipient[]","name":"additionalRecipients","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct BasicOrderParameters","name":"_basicOrderParameters","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"execute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getTellerV2","outputs":[{"internalType":"contract TellerV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"_submitBidArgs","type":"tuple"},{"internalType":"address","name":"assetContractAddress","type":"address"},{"internalType":"uint256","name":"assetTokenId","type":"uint256"},{"internalType":"uint256","name":"assetQuantity","type":"uint256"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"name":"getTypeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const token721ABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const token1155ABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const token165ABI = [{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
 
const TellerV2ABI = [{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"}],"name":"approveMarketForwarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"hasApprovedMarketForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]


$(document).ready(() => {
  let chainId = 1
  let alchemyApiKey = "AEtZpckav3marVzv5FPIbDyddDAkewJ6"
  let provider
	const params = new URLSearchParams(window.location.search)
		if (window.location.search) {
				const queryTokenAddress = params.get('tokenAddress')
				const queryTokenId = params.get('tokenId')
				$("#token-id").val(queryTokenId)
		    $("#NFT-Collection-field").val(queryTokenAddress)
				fetchNFT(queryTokenAddress,queryTokenId)
				getTerms()
		}

	$(window).keydown((event) => {
		if(event.keyCode == 13) {
			event.preventDefault()
			const tokenid = $("#token-id").val()
			if (!!tokenid) getTerms(event)
			return false
		}
	})

  if (window.ethereum) {
		ethereum.enable()
			.then(async() => {
        init()
        onConnect()
        provider = new ethers.providers.Web3Provider(window.ethereum)
				const signer = provider.getSigner()
				const signerAddress = await signer.getAddress()

				const tellerProfileLink = `https://mp.teller.org/profile/${signerAddress}/borrower`
				$("#teller-link").attr("href",tellerProfileLink)
				
        ethereum.on('chainChanged', (chainId) => {window.location.reload()})

				const network = await provider.getNetwork()
				chainId = network.chainId
				
        if(chainId !== 1 ) {$("#modal-overlay").show()}
				$("#NFT-Collection-field").change(async() => {
          // $("#get-terms").text("Checking availability...")
          $("#get-terms").prop("disabled",true)
          await getNFTData(true)
        })
				$("#token-id").keyup(async() => {
          // $("#get-terms").text("Checking availability...")
          $("#get-terms").prop("disabled",true)
          await getNFTData()
        })
			})
			.catch((e) => {console.error(e)})
	}

	async function getNFTData(resetId = false) {
		const contractAddr=$("#NFT-Collection-field option:selected").val() ? $("#NFT-Collection-field option:selected").val() : "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e";
		let tokenId=$("#token-id").val() ? $("#token-id").val() : "1"
		if (resetId) {
				tokenId = "1"
			$("#token-id").text('1')
			$("#token-id").val('1')
		}
		const tokenContract = new ethers.Contract(contractAddr, token165ABI, provider)
		// const supportsInterface = await tokenContract.supportsInterface("0x80ac58cd")
		// const tokenType = supportsInterface ? "erc721" : "erc1155"
    fetchNFT(contractAddr,tokenId)
	}

	function fetchNFT(contractAddr, tokenId) {
		var reqOptions = {
      method: 'GET',
      redirect: 'follow'
    }
		const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${alchemyApiKey}/getNFTMetadata`
		const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`
		fetch(fetchURL, reqOptions)
			.then(response => response.json())
			.then(result => {
        const name = result.metadata.name ? result.metadata.name : $("#NFT-Collection-field option:selected").text()
        const id = result.id.tokenId
        let imageLink = result.metadata.image ? result.metadata.image : result.metadata.image_data
        imageLink = imageLink.replace("ipfs://", "https://ipfs.io/ipfs/")
        $("#collection-title").text(name)
        $("#nft-token-id").text(id)
        $("#finalized-nft-token-id").text(id)
        $("#nft-image").attr("src", imageLink)
        $("#finalized-collection-title").text(name)
        $("#finalized-nft-image").attr("src", imageLink)
        const collections = {"Dood":"doodles-official", "Cool": "cool-cats-nft", "Othe": "otherdeed", "gobl": "goblintownwtf", "Test": "thepossessed", "adid": "adidasoriginals", "Mura": "murakami-flowers-seed", "RTFK": "rtfkt-mnlth", "Mura" :"murakami-flowers-2022-official", "Pudg": "pudgypenguins", "Muta": "mutant-ape-yacht-club"}
        const openseaCollectionLink = `https://opensea.io/collection/${collections[name.slice(0, 4)]}`
        $("#opensea-link").attr("href", openseaCollectionLink)
        const openseaNFTLink = `https://opensea.io/assets/ethereum/${contractAddr}/${tokenId}`
        $("#opensea-img-link").attr("href", openseaNFTLink)
		  })
			.catch(error => console.log('error', error))
      $("#get-terms").prop("disabled", false)
  }

	async function getTerms() {
		$("#get-terms").text("Please wait...")
		const tokenid = $("#token-id").val()
		const contractaddress = $("#NFT-Collection-field").val()
		var formdata = new FormData()
		formdata.append("asset_contract_address", contractaddress)
		formdata.append("token_id", tokenid)
		formdata.append("chain_id", chainId)
		var requestOptions = {method:'POST',body:formdata,redirect:'follow'}
		fetch("https://api.apenowpaylater.com/api/getOrderDetails", requestOptions)
			.then(response => response.json())
			.then(result => {
        apiresponse = result
				$("#NFT-to-get").hide()
				if (result.success) {
          $("#final-steps").show()
          $("#no-avail").hide()
          $("#buynow").show()
          $("#borrower-token").attr("data-clipboard-text", result.data.encodedOutput)
          var downpayment = +result.data.submitBidArgs.downPayment/(10**18)
          $(".down-payment").text(`${downpayment.toFixed(4)} ETH`)
          var duration = +result.data.submitBidArgs.duration/(60*60*24)
          $(".duration-months").text(`${duration.toFixed(0)} Days`)      
          var loans = +result.data.submitBidArgs.principal/(10**18)
          $(".loans-required").text(`${loans.toFixed(4)} wETH`)
          var apr = +result.data.submitBidArgs.interestRate/(10**2)
          $(".apr").text(`${apr} %`)
          var downPercent = (+result.data.submitBidArgs.downPayment/+result.data.submitBidArgs.totalPurchasePrice)*(10**2)
          $(".down-percent").text(`${downPercent.toFixed(2)} %`)
          var tokenId = +result.data.openSeaResponse.parameters.offer[0].identifierOrCriteria
          $(".token-id").text(`${tokenId.toFixed(0)}`)
          $(".borrow-token").text(result.data.encodedOutput)
				} else {
          $("#final-steps").show()
          $(".down-payment").text(`N/A ETH`)
          $(".duration-months").text(`N/A Days`)      
          $(".loans-required").text(`N/A wETH`)
          $(".apr").text(`N/A %`)
          $(".down-percent").text(`N/A %`)
          $(".borrow-token").text('N/A')
          $("#buynow").hide()
          $("#no-avail").show()
          // $("#api-error").show()
					// $("#error-message").text(result?.error)
          //   return
          }
				
			})
			.catch(error => console.log('error', error))
	}

  let apiresponse
  new ClipboardJS("#borrower-token")
  $("#loan-terms").hide()
  $("#modal-overlay").hide()
  $("#final-steps").hide()
  $("#api-error").hide()
  $("#web3-error").hide()
  $("#pending-tx").hide()
  $("#success-tx").hide()
  $("#failure-tx").hide()
  $("#get-terms").click((e)=>{
      e.preventDefault()
      getTerms()
  })
  $("#back-to-terms").click(() => {
    $("#loan-terms").hide()
    $("#NFT-to-get").show()
    $("#final-steps").hide()
    $("#get-terms").text("Show terms")
  })
  $("#accept-terms").click(() => {
    $("#loan-terms").hide()
    $("#final-steps").show()
  })
  let isDisabled = false
  $("#buynow").click(async () => {
    if (isDisabled == true) {return}
    isDisabled = true
    let chainId
    try {
      if (window.ethereum) {
      await ethereum.enable()
        .then(async() => {
          window.provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const tellerProfileLink = `https://mp.teller.org/profile/${await signer.getAddress()}/borrower`
          $("#teller-link").attr("href",tellerProfileLink)
        })
        .catch((e) => {console.error(e)})
      const network = await provider.getNetwork()
      chainId = network.chainId
      } else {
        $("#web3-error").show()
        $("#final-steps").hide()
        return
      }
      const signer = provider.getSigner()
      let bnplAddress
      if(chainId == 1){bnplAddress='0x260C32eB38D1403bd51B83B5b7047812C70B7845'}
      const bnplContract = new ethers.Contract(bnplAddress, BNPLMarketABI, provider).connect(signer);
      const marketId = await bnplContract.marketId()
      let tellerV2Address;
      if(chainId==1){tellerV2Address='0x00182FdB0B880eE24D428e3Cc39383717677C37e'}
      const tellerV2Contract = new ethers.Contract(tellerV2Address, TellerV2ABI, provider).connect(signer);
      const hasApproved = await tellerV2Contract.hasApprovedMarketForwarder(marketId,bnplContract.address,await signer.getAddress())
      if(!hasApproved){tellerV2Contract.approveMarketForwarder(marketId, bnplContract.address)}
      await new Promise((r)=>{setTimeout(r,2000)})
      const { wait } = await bnplContract.execute(apiresponse.data.submitBidArgs,apiresponse.data.basicOrderParams,apiresponse.data.craSignature,{value: apiresponse.data.submitBidArgs.downPayment,gasLimit: "1000000"})
      $("#pending-tx").show()
      $("#buynow").hide()
      const receipt = await wait()
      $("#pending-tx").hide()
      if (receipt.status===1)  {$("#success-tx").show()}
      else {$("#failure-tx").show()}
      let etherscanLink;
      if (chainId == 4) {etherscanLink = `https://rinkeby.etherscan.io/tx/${receipt.transactionHash}`}
      if (chainId == 1) {etherscanLink = `https://etherscan.io/tx/${receipt.transactionHash}` }
    } catch (e) {console.error(e)}
	});
});
const input = document.getElementById("token-id")
input.addEventListener('input', blockButton)
function blockButton(e)	{
		const button = document.getElementById("get-terms")
	if (e.target.value) {
		button.removeAttribute("title")
		button.removeAttribute("disabled")
	} else {
	button.setAttribute("title", "Please input token ID")
	button.setAttribute("disabled", "")}
}