const { ethers } = require("ethers");

// Create a provider connected to the Celo Alfajores testnet
const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");

// Create a signer with your private key and the provider
const signer = new ethers.Wallet("your-private-key").connect(provider);

// Specify the address of your deployed contract
const contractAddress = "your-deployed-contract-address";

// Specify the ABI of your contract
const abi = [ /* the ABI from your contract goes here */ ];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

const main = async () => {
    // Call the sellWaste function on the contract
    const tx = await contract.connect(signer).sellWaste("Plastic", 500);
    // Wait for the transaction to be confirmed
    await tx.wait();

    // Fetch the first waste object from the contract
    const waste = await contract.wastes(0);
    // Log the fetched waste object
    console.log(waste);
}

main();
