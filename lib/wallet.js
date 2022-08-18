{/* <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/web3modal"></script>
    <script type="text/javascript" src="https://unpkg.com/evm-chains@0.2.0/dist/cjs/index.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider"></script>
    <script type="text/javascript" src="https://unpkg.com/fortmatic@2.0.6/dist/fortmatic.js"></script>
<script> */}
// "use strict"

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider //.default
const CoinbaseWalletSDK = window.CoinbaseWalletSDK
//const EvmChains = window.EvmChains
//const Fortmatic = window.Fortmatic

// Web3modal instance, Chosen wallet provider given by the dialog window, Address of the selected account
let web3Modal, provider, selectedAccount
let accounts = []
/**
 * Setup the orchestra
 */
async function init() {
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  
  //Immediately prompt user to login
  //provider = window.ethereum;
  
	/*if (typeof provider !== 'undefined') {
		provider.request({ method: 'eth_requestAccounts' })
			.then((acc) => {
				selectedAccount = acc[0];
        accounts = acc;
        var cutAcc = selectedAccount.replace(selectedAccount.substring(4,selectedAccount.length - 4), "...");
        $('#connect-text').text(cutAcc);
        $("#btn-connect").text(cutAcc);
        // $("#btn-connect").attr("disabled", "disabled");
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		provider.on('accountsChanged', function (acc) {
			selectedAccount = acc[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}*/

	console.log({window, rp: "rp"})

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "96c8004e07b84657aa885e1da682724a",
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, 
      options: {
      	appName: "Ape Now",
        infuraId: "96c8004e07b84657aa885e1da682724a",
      },
    },
  }

  web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  })

  await web3Modal.clearCachedProvider()

}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider)

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId()

  // Get list of accounts of the connected wallet
  accounts = await web3.eth.getAccounts()

  // MetaMask does not give you all accounts, only the selected account
  selectedAccount = accounts[0]
  var cutAcc = selectedAccount.replace(selectedAccount.substring(4,selectedAccount.length - 4), "...");

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address)
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether")
    const parseBalance = parseFloat(ethBalance).toFixed(3)
  })
  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers)

  // Display fully loaded UI for wallet data
  //$("#connect-text").text(cutAcc)
  $("#btn-connect").text(cutAcc)
  $("#btn-connect").prop("disabled", false)
  
  //document.querySelector("#btn-disconnect").style.display = "flex"
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data  
  // document.querySelector("#btn-connect").style.display = "flex"

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  console.log("Opening a dialog", web3Modal)
  try {
    provider = await web3Modal.connect()
  } catch(e) {
    console.log("Could not get a wallet connection", e)
    return
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData()
  })

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData()
  })

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData()
  })

  await refreshAccountData()
}

/*Disconnect button pressed*/
async function onDisconnect() {

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close()

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider()
    provider = null
  }

  await web3Modal.clearCachedProvider()
  provider = null

  selectedAccount = null

  // Set the UI back to the initial state
  $("#btn-connect").text("Connect wallet")
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  $("#btn-connect").click(() => {
    console.log("TEsts")
    if ($("#btn-connect").text().length > 11) {
      onConnect()
    }
    if ($("#btn-connect").text().length < 14) {
      onDisconnect() 
	  }
  })
})