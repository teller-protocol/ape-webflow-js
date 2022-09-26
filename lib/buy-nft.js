const BNPLMarketABI = [{"inputs":[{"internalType":"address","name":"_tellerV2","type":"address"},{"internalType":"address","name":"_marketRegistry","type":"address"},{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_wethAddress","type":"address"},{"internalType":"address","name":"_trustedForwarder","type":"address"},{"internalType":"address","name":"_craSigner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"discreteOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bidId","type":"uint256"}],"name":"AcceptedDiscreteOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"bidId","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":true,"internalType":"address","name":"lender","type":"address"}],"name":"AssetPurchaseWithLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"discreteOrderId","type":"uint256"}],"name":"CancelledDiscreteOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"bidId","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"address","name":"tokenContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ClaimedAsset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"discreteOrderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"}],"name":"CreatedDiscreteOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_feeRecipient","type":"address"},{"indexed":false,"internalType":"bool","name":"allowed","type":"bool"}],"name":"SetAllowedFeeRecipient","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"pct","type":"uint16"}],"name":"SetReferralReward","type":"event"},{"inputs":[],"name":"CONTRACT_NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONTRACT_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CRA_SIGNER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ETH_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"__assetReceiptRegister","outputs":[{"internalType":"address","name":"assetContractAddress","type":"address"},{"internalType":"uint256","name":"assetTokenId","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tellerV2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discreteOrderId","type":"uint256"},{"components":[{"internalType":"address","name":"considerationToken","type":"address"},{"internalType":"uint256","name":"considerationIdentifier","type":"uint256"},{"internalType":"uint256","name":"considerationAmount","type":"uint256"},{"internalType":"address payable","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"internalType":"address","name":"offerToken","type":"address"},{"internalType":"uint256","name":"offerIdentifier","type":"uint256"},{"internalType":"uint256","name":"offerAmount","type":"uint256"},{"internalType":"enum BasicOrderType","name":"basicOrderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"offererConduitKey","type":"bytes32"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalAdditionalRecipients","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct AdditionalRecipient[]","name":"additionalRecipients","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct BasicOrderParameters","name":"_basicOrderParameters","type":"tuple"}],"name":"acceptDiscreteOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowedFeeRecipients","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discreteOrderId","type":"uint256"}],"name":"cancelDiscreteOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bidId","type":"uint256"}],"name":"claimNFTFromDefaultedLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bidId","type":"uint256"}],"name":"claimNFTFromRepaidLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cryptopunksEscrowBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cryptopunksMarketAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discreteOrderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"discreteOrders","outputs":[{"internalType":"address","name":"borrower","type":"address"},{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"signatureExpiration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"},{"internalType":"address","name":"referralAddress","type":"address"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"submitBidArgs","type":"tuple"},{"internalType":"address","name":"assetContractAddress","type":"address"},{"internalType":"uint256","name":"assetTokenId","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"bidId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"escrowedTokensForLoan","outputs":[{"internalType":"enum IBNPLMarket.TokenType","name":"tokenType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"tokenClaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"signatureExpiration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"},{"internalType":"address","name":"referralAddress","type":"address"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"_submitBidArgs","type":"tuple"},{"components":[{"internalType":"address","name":"considerationToken","type":"address"},{"internalType":"uint256","name":"considerationIdentifier","type":"uint256"},{"internalType":"uint256","name":"considerationAmount","type":"uint256"},{"internalType":"address payable","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"internalType":"address","name":"offerToken","type":"address"},{"internalType":"uint256","name":"offerIdentifier","type":"uint256"},{"internalType":"uint256","name":"offerAmount","type":"uint256"},{"internalType":"enum BasicOrderType","name":"basicOrderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"offererConduitKey","type":"bytes32"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalAdditionalRecipients","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct AdditionalRecipient[]","name":"additionalRecipients","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct BasicOrderParameters","name":"_basicOrderParameters","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"execute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"executedSignatures","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTellerV2","outputs":[{"internalType":"contract TellerV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketId","type":"uint256"}],"name":"getTellerV2MarketOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"signatureExpiration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"},{"internalType":"address","name":"referralAddress","type":"address"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"_submitBidArgs","type":"tuple"},{"internalType":"address","name":"assetContractAddress","type":"address"},{"internalType":"uint256","name":"assetTokenId","type":"uint256"},{"internalType":"uint256","name":"assetQuantity","type":"uint256"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"name":"getTypeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_cryptopunksMarketAddress","type":"address"},{"internalType":"address","name":"_seaportEscrowBuyer","type":"address"},{"internalType":"address","name":"_cryptopunksEscrowBuyer","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_cryptopunksMarketAddress","type":"address"},{"internalType":"address","name":"_cryptopunksEscrowBuyer","type":"address"},{"internalType":"address","name":"_seaportEscrowBuyer","type":"address"}],"name":"onUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"internalType":"bytes32","name":"typeHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"recoverSignature","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralRewardPercent","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seaportEscrowBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_feeRecipient","type":"address"},{"internalType":"bool","name":"_allowed","type":"bool"}],"name":"setAllowedFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_pct","type":"uint16"}],"name":"setReferralRewardPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"totalPurchasePrice","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"downPayment","type":"uint256"},{"internalType":"uint32","name":"duration","type":"uint32"},{"internalType":"uint32","name":"signatureExpiration","type":"uint32"},{"internalType":"uint16","name":"interestRate","type":"uint16"},{"internalType":"string","name":"metadataURI","type":"string"},{"internalType":"address","name":"referralAddress","type":"address"}],"internalType":"struct BNPLMarket.SubmitBidArgs","name":"_submitBidArgs","type":"tuple"},{"internalType":"address","name":"_assetContractAddress","type":"address"},{"internalType":"uint256","name":"_assetTokenId","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"submitDiscreteOrder","outputs":[{"internalType":"uint256","name":"discreteOrderId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum IBNPLMarket.TokenType","name":"tokenType","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLegacyAssetToEscrow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokenAddresses","type":"address[]"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"enum IBNPLMarket.TokenType[]","name":"tokenTypes","type":"uint8[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"transferLegacyAssetsArrayToEscrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradedToVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wethAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

const token721ABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const token1155ABI = [{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const token165ABI = [{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
 
const TellerV2ABI = [{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"}],"name":"approveMarketForwarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_marketId","type":"uint256"},{"internalType":"address","name":"_forwarder","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"hasApprovedMarketForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]


$(document).ready(() => {
  $("#btn-connect").show()
  let chainId = 1
  let alchemyApiKey = "AEtZpckav3marVzv5FPIbDyddDAkewJ6"
  let provider
  $(window).on('connected', async(evt, prov) => {
      provider = new ethers.providers.Web3Provider(prov)
      chainId = parseInt(prov.chainId)
      const params = new URLSearchParams(window.location.search)
      if (window.location.search) {
          const queryTokenAddress = params.get('tokenAddress')
          const queryTokenId = params.get('tokenId')
          const referrer = params.get('tags')
          $("#token-id").val(queryTokenId)
          $("#NFT-Collection-field").attr("value",queryTokenAddress)
          $("#NFT-Collection-field option:selected").attr("value",queryTokenAddress)
          fetchNFT(queryTokenAddress,queryTokenId)
          getTerms(referrer)
      }
  })
	const params = new URLSearchParams(window.location.search)
		if (window.location.search) {
				const queryTokenAddress = params.get('tokenAddress')
				const queryTokenId = params.get('tokenId')
        const referrer = params.get('tags')
				$("#token-id").val(queryTokenId)
		    $("#NFT-Collection-field").attr("value",queryTokenAddress)
        $("#NFT-Collection-field option:selected").attr("value",queryTokenAddress)
				fetchNFT(queryTokenAddress,queryTokenId)
				getTerms(referrer)
		}

	$(window).keydown((event) => {
		if(event.keyCode == 13) {
			event.preventDefault()
			const tokenid = $("#token-id").val()
			if (!!tokenid) getTerms(event)
			return false
		}
	})

  $("#NFT-Collection-field").change(async() => {
    $("#get-terms").prop("disabled",true)
    await getNFTData(true)
  })
  $("#token-id").keyup(async() => {
    $("#get-terms").prop("disabled",true)
    await getNFTData()
  })

	async function getNFTData(resetId = false) {
		const contractAddr=$("#NFT-Collection-field option:selected").val() ? $("#NFT-Collection-field option:selected").val() : "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e";
		let tokenId=$("#token-id").val() ? $("#token-id").val() : "1"
		if (resetId) {
				tokenId = "1"
			$("#token-id").text('1')
			$("#token-id").val('1')
		}
		const tokenContract = new ethers.Contract(contractAddr, token165ABI, provider)
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
        const name = result.contractMetadata.name ? result.contractMetadata.name : $("#NFT-Collection-field option:selected").text()
        const id = result.id.tokenId
        let imageLink = result.metadata.image ? result.metadata.image : result.metadata.image_data
        imageLink = imageLink.replace("ipfs://", "https://ipfs.io/ipfs/")
        $("#collection-title").text(name)
        $("#nft-token-id").text(id)
        $("#finalized-nft-token-id").text(id)
        $("#nft-image").attr("src", imageLink)
        $("#finalized-collection-title").text(name)
        $("#finalized-nft-image").attr("src", imageLink)
        const collections = {
          "Doodles":"doodles-official", 
          "Cool Cats": "cool-cats-nft", 
          "Otherdeed": "otherdeed", 
          "goblintown": "goblintownwtf", 
          "The Possessed": "thepossessed", 
          "adidas Originals: Into the Metaverse": "adidasoriginals", 
          "Murakami.Flowers Seed": "murakami-flowers-seed", 
          "RTFKT - MNLTH": "rtfktmonolith", 
          "Murakami.Flowers" :"murakami-flowers-2022-official", 
          "PudgyPenguins": "pudgypenguins", 
          "MutantApeYachtClub": "mutant-ape-yacht-club",
          "The Saudis": "thesaudis",
          "The Possessed": "thepossessed"
        }
        const openseaCollectionLink = `https://opensea.io/collection/${collections[name]}`
        $("#opensea-link").attr("href", openseaCollectionLink)
        const openseaNFTLink = `https://opensea.io/assets/ethereum/${contractAddr}/${tokenId}`
        $("#opensea-img-link").attr("href", openseaNFTLink)
		  })
			.catch(error => console.log('error', error))
      $("#get-terms").prop("disabled", false)
  }

	async function getTerms(referrer) {
		$("#get-terms").text("Please wait...")
		const tokenId = $("#token-id").val()
		const contractAddress = $("#NFT-Collection-field").val()
    const reffererTag = typeof referrer === "undefined" ? "" : referrer
		var formdata = new FormData()
		formdata.append("asset_contract_address", contractAddress)
		formdata.append("token_id", tokenId)
		formdata.append("chain_id", chainId)
    let bnplAddress
      if (chainId == 1){
        bnplAddress='0x260C32eB38D1403bd51B83B5b7047812C70B7845'
      }
      if (chainId == 5){
        bnplAddress='0xC6091F3eDf31fA82E15D32Fe18B1cf21c094AEaA'
      }
    const bnplContract = new ethers.Contract(
      bnplAddress, 
      BNPLMarketABI, 
      provider)
    let contract_version = 2
    try {
      contract_version = await bnplContract.CONTRACT_VERSION()
    } catch (e) {
      console.log({e})
    }
    formdata.append("signature_version", contract_version)
    formdata.append("referrer", reffererTag)
		var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    }
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
    if (
      isDisabled == true
      ) {
        return
      }
    isDisabled = true
    try {
      let chainId
      let provider
      let signer
      let signerAddress
      if (window.provider) {
        provider = new ethers.providers.Web3Provider(window.provider)
        signer = provider.getSigner()
        signerAddress = await signer.getAddress()
        const tellerProfileLink = `https://mp.teller.org/profile/${provider.selectedAddress}/borrower`
        $("#teller-link").attr("href",tellerProfileLink)
        const network = await provider.getNetwork()
        chainId = network.chainId
      } else {
        $("#web3-error").show()
        $("#final-steps").hide()
        return
      }
      let bnplAddress
      if (chainId == 1){
        bnplAddress='0x260C32eB38D1403bd51B83B5b7047812C70B7845'
      }
      if (chainId == 5){
        bnplAddress='0xC6091F3eDf31fA82E15D32Fe18B1cf21c094AEaA'
      }

      const bnplContract = new ethers.Contract(
        bnplAddress, 
        BNPLMarketABI, 
        provider
        ).connect(signer)
      const marketId = await bnplContract.marketId()

      let tellerV2Address
      if (chainId == 1) {
        tellerV2Address='0x00182FdB0B880eE24D428e3Cc39383717677C37e'
      }
      if (chainId == 5) {
        tellerV2Address='0xC6091F3eDf31fA82E15D32Fe18B1cf21c094AEaA'
      }

      const tellerV2Contract = new ethers.Contract(
        tellerV2Address, 
        TellerV2ABI, 
        provider
        ).connect(signer)

      const hasApproved = await tellerV2Contract.hasApprovedMarketForwarder(
          marketId,
          bnplAddress,
          signerAddress)

      if (!hasApproved) {
        tellerV2Contract.approveMarketForwarder(marketId, bnplContract.address)

      await new Promise((r)=>{setTimeout(r,2000)})
      }

      let wait

      if (!apiresponse.data.craSignature) {
        ({ wait } = await bnplContract.submitDiscreteOrder(
          apiresponse.data.submitBidArgs,
          apiresponse.data.basicOrderParams.offerToken,
          apiresponse.data.basicOrderParams.offerIdentifier,
          apiresponse.data.basicOrderParams.offerAmount,
          {gasLimit: "10000000"}
          ))
      } else {
        ({ wait } = await bnplContract.execute(
          apiresponse.data.submitBidArgs,
          apiresponse.data.basicOrderParams,
          apiresponse.data.craSignature,
          {value: apiresponse.data.submitBidArgs.downPayment, gasLimit: "1000000"}
          ))
      }

      $("#pending-tx").show()
      $("#buynow").hide()
      const receipt = await wait()
      $("#pending-tx").hide()
      if (receipt.status === 1)  {
        $("#success-tx").show()
      }
      else {
        $("#failure-tx").show()
      }
      console.log({receipt})
      let etherscanLink
      if (chainId == 5) {
        etherscanLink = `https://goerli.etherscan.io/tx/${receipt.transactionHash}`
      }
      if (chainId == 1) {
        etherscanLink = `https://etherscan.io/tx/${receipt.transactionHash}` 
      }
    } catch (e) {
      isDisabled = false
      console.error(e)
    }
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