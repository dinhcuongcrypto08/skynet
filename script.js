```javascript
// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior:'smooth'
    });

  });

});

// Wallet Connection

const connectButton =
  document.getElementById('connectWallet');

let provider;
let signer;
let walletAddress;

async function connectWallet() {

  if (typeof window.ethereum === 'undefined') {

    alert('Please install MetaMask.');

    return;
  }

  try {

    provider =
      new ethers.BrowserProvider(window.ethereum);

    await provider.send(
      "eth_requestAccounts",
      []
    );

    signer = await provider.getSigner();

    walletAddress =
      await signer.getAddress();

    const shortAddress =
      walletAddress.slice(0,6) +
      "..." +
      walletAddress.slice(-4);

    connectButton.innerText =
      shortAddress;

    console.log(
      "Connected Wallet:",
      walletAddress
    );

  } catch(error) {

    console.error(error);

    alert('Wallet connection failed.');

  }
}

connectButton.addEventListener(
  'click',
  connectWallet
);

// Detect Account Change

if(window.ethereum){

  window.ethereum.on(
    'accountsChanged',
    function(accounts){

      if(accounts.length === 0){

        connectButton.innerText =
          'Connect Wallet';

      } else {

        const shortAddress =
          accounts[0].slice(0,6) +
          "..." +
          accounts[0].slice(-4);

        connectButton.innerText =
          shortAddress;
      }
    }
  );
}
```
