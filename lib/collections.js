$(document).ready(() => {
    $("#btn-connect").hide()

    let nextPage
    let cursor

    function fetchCollections() {
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
            "100k-club": "100K Club"
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
        }

        const collection_address = collectionAddresses[requestedCollection]

        populateCards(requestedCollection, collection_address, collection_name)


        $(window).scroll(function () {
            // End of the document reached?
            $("#loading-state").show()
            const scrollHeight = $(document).height()
            const scrollPos = $(this).height() + $(this).scrollTop()
            if (((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {
                if (nextPage) {
                    populateCards(requestedCollection, collection_address, collection_name)
                }
            }
            $("#loading-state").hide()
        })

        $("#submit-token").click(async () => {
            const tokenId = $("#token-id").val()
            const url = `${window.location.origin}/buy-nft?tokenAddress=${collection_address}&tokenId=${tokenId}`
            $(location).attr('href', url)
        })
    }

    function populateCards(requestedCollection, collection_address, collection_name) {
        // Make api request
        var formdata = new FormData()
        if (["999 Club", "10K Club", "100K Club"].includes(collection_name)) {
            formdata.append("category", collection_name)
            formdata.append("collection", "ens")
        } else {
            formdata.append("collection", collection_name)
        }
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }

        // Set up routes
        const baseURL = `https://api.apenowpaylater.com/api/getOpenseaCollection`
        const domain = window.location.origin

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
                    newCard.find(`.heading-25.apenow-price`).text(Number(result.data[i].nft_price/2).toFixed(3))
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
                    formdata.append('initial_cursor', cursor)
                }
            })
            .catch(error => console.log('error', error))
    }

/**
 * Main entry point.
 */
 window.addEventListener('load', async () => {
    $("#nft-card-template").hide()
    fetchCollections()
  })
})