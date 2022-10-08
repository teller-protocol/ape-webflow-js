$(document).ready(() => {
    $("#btn-connect").hide()

    let nextPage
    let cursor
    let alchemyApiKey = "AEtZpckav3marVzv5FPIbDyddDAkewJ6"
    const domain = window.location.origin

    // Get collection name from URL
    const requestedCollection = window.location.pathname.split("/collections/")[1]
    // Match collection name to api param
    const collections = {
        "doodles":"doodles-official", 
        "cool-cats-nft": "cool-cats-nft", 
        "otherdeed-for-otherside": "otherdeed", 
        "goblintown-wtf": "goblintownwtf", 
        "the-possessed": "thepossessed", 
        "adidas": "adidasoriginals", 
        "murakami-flowers-seed": "murakami-flowers-seed", 
        "rtfkt-x-nike-monolith": "rtfktmonolith", 
        "murakami-flowers-official" :"murakami-flowers-2022-official", 
        "pudgy-penguins": "pudgypenguins", 
        "mutant-ape-yacht-club": "mutant-ape-yacht-club",
        "the-saudis": "thesaudis",
        "the-possessed": "thepossessed",
        "999-club": "999 Club",
        "10k-club": "10K Club",
        "100k-club": "100K Club",
        "cryptopunks": "cryptopunks"
      }

    const collection_name = collections[requestedCollection]

    // Set up buy URL
    const collectionAddresses = {
        "doodles":"0x8a90cab2b38dba80c64b7734e58ee1db38b8992e", 
        "cool-cats-nft": "0x1A92f7381B9F03921564a437210bB9396471050C", 
        "otherdeed-for-otherside": "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258", 
        "goblintown-wtf": "0xbCe3781ae7Ca1a5e050Bd9C4c77369867eBc307e", 
        "the-possessed": "0x3A2096754Df385553C4252E5A82DC862e64169Bb", 
        "adidas": "0x28472a58A490c5e09A238847F66A68a47cC76f0f", 
        "murakami-flowers-seed": "0x341a1c534248966c4b6afad165b98daed4b964ef", 
        "rtfkt-x-nike-monolith": "0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1", 
        "murakami-flowers-official" :"0x7d8820fa92eb1584636f4f5b8515b5476b75171a", 
        "pudgy-penguins": "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", 
        "mutant-ape-yacht-club": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
        "the-saudis": "0xe21EBCD28d37A67757B9Bc7b290f4C4928A430b1",
        "the-possessed": "0x3A2096754Df385553C4252E5A82DC862e64169Bb",
        "999-club": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", // ens
        "10k-club": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", // ens
        "100k-club": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", // ens
        "cryptopunks": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
    }

    const collection_address = collectionAddresses[requestedCollection]

    function fetchCollections() {
        populateCards(requestedCollection, collection_address, collection_name)
    }

    $("#reload-collection").click(async () => {
        window.location.reload()
    })

    $(window).scroll(function () {
        // End of the document reached?
        $("#loading-state").show()
        const scrollHeight = $(document).height()
        const scrollPos = $(this).height() + $(this).scrollTop()
        if (((scrollHeight - 200) >= scrollPos) / scrollHeight == 0) {
            if (nextPage) {
                populateCards(requestedCollection, collection_address, collection_name)
            }
        }
    })

    let isFetching = false
    function populateCards(requestedCollection, collection_address, collection_name) {
        $("#loading-state").show()
        if (isFetching) return
        isFetching = true
        // Make api request
        var formdata = new FormData()
        if (["999 Club", "10K Club", "100K Club"].includes(collection_name)) {
            formdata.append("category", collection_name)
            formdata.append("collection", "ens")
        } else {
            formdata.append("collection", collection_name)
        }
        if (nextPage) {
            formdata.append("initial_cursor", cursor)
        }
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }

        // Set up routes
        const baseURL = `https://api.apenowpaylater.com/api/getOpenseaCollection`

        // Generate nft cards from api response
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then(result => {
                for (let i=0; i < result.data.length; i++) {
                    const newCard = $("#nft-card-template").clone()
                    newCard.appendTo("#collection-grid")
                    newCard.show()
                    newCard.attr('id', `${requestedCollection}-${result.data.token_id}`)

                    // Display NFT image and details
                    newCard.find(`.nft-img`).attr("src", result.data[i].image_url)
                    newCard.find(`.heading-25.nft-price`).text(Number(result.data[i].nft_price).toFixed(3))
                    newCard.find(`.heading-25.apenow-price`).text(Number(result.data[i].down_payment).toFixed(3))
                    let tokenId = result.data[i].token_id
                    if (result.data[i].token_id.length > 6) {
                        tokenId = result.data[i].display_name
                    }
                    newCard.find(`.nft-id`).text(`# ${tokenId}`)

                    // Set up checkout link
                    newCard.find(".buynow").attr('href', `${domain}/buy-nft?tokenAddress=${collection_address}&tokenId=${result.data[i].token_id}`)
                }
                nextPage = result.hasNextPage
                if (result.hasNextPage) {
                    cursor = result.nextCursor
                }
            })
            .catch(error => console.log('error', error))
            .finally(() => {
                isFetching = false
                $("#loading-state").hide()
            })
    }

    $("#search-token-id").keydown((event) => {
        if(event.keyCode == 13) {
            event.preventDefault()
        }
        setTimeout(function() {
            const tokenId = $("#search-token-id").val()
            fetchNFT(collection_address, tokenId)
        }, 50) 
    })

    $("#submit-search").click(async () => {
        const tokenId = $("#search-token-id").val()
        fetchNFT(collection_address, tokenId)
    })

    function fetchNFT(collection_address, tokenId) {
        $("#collection-grid").hide()
        $("#loading-state").hide()

        var formData = new FormData()
        formData.append("asset_contract_address", collection_address)
        formData.append("signature_version", "3")
        formData.append("chain_id", "1")

        // If ENS, use token name instead of token id
        if (collection_address === "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85") {
            if(!tokenId.includes(".eth")) {
                tokenId = tokenId.concat(".eth")
            }
            formData.append("token_name", tokenId)
        } else {
            formData.append("token_id", tokenId)
        }

        var reqOptions = {
            method: "POST",
            body: formData,
            redirect: "follow"
        }
        fetch("https://api.apenowpaylater.com/api/getOrderDetails", reqOptions)
            .then(response => response.json())
            .then(result => {
                // Remove existing card if applicable
                if($("#search-result")) {
                    $("#search-result").remove()
                }

                if (result.success){
                    // Populate single card with ape now price

                    if($("#nft-unavailable")) {
                        $("#nft-unavailable").hide()
                    }

                    const price = result.data.submitBidArgs.totalPurchasePrice/1e18
                    const payment = result.data.submitBidArgs.downPayment/1e18

                    const newCard = $("#nft-card-template").clone()
                    newCard.appendTo("#test-div")
                    newCard.show()
                    newCard.attr('id', `search-result`)
                    newCard.find(`.heading-25.nft-price`).text(Number(price).toFixed(3))
                    newCard.find(`.heading-25.apenow-price`).text(Number(payment).toFixed(3))
                    
                    let imageLink = result.data.addnlContextData.imageUrl
                    imageLink = imageLink.replace("ipfs://", "https://ipfs.io/ipfs/")
                    
                    newCard.find(`.nft-img`).attr("src", imageLink)
                    newCard.find(`.nft-id`).text(`# ${tokenId}`)

                    // Set up checkout link
                    if (collection_address === "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85") {
                        newCard.find(".buynow").attr('href', `${domain}/buy-nft?tokenAddress=${collection_address}&tokenId=${new ethers.BigNumber.from(result.data.basicOrderParams.offerIdentifier).toString()}`)
                    } else {
                        newCard.find(".buynow").attr('href', `${domain}/buy-nft?tokenAddress=${collection_address}&tokenId=${tokenId}`)
                    }
                    

                } else {
                    // Show NFT not available
                    $("#nft-unavailable").appendTo("#test-div")
                    $("#nft-unavailable").show()
                }
            })
            .catch(error => console.log("error", error))
        $("#loading-state").hide()
    }

/**
 * Main entry point.
 */
 window.addEventListener('load', async () => {
    $("#nft-card-template").hide()
    fetchCollections()
  })
})