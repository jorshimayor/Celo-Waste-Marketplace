// scripts/deploy.js
async function main() {
  // Get the first signer from the signer array
  const [deployer] = await ethers.getSigners();

  console.log("Deploying the contract with the account:", deployer.address);

  // Get the contract factory
  const Contract = await ethers.getContractFactory("WasteMarket");

  // Deploy the contract
  const contract = await Contract.deploy();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0)) // exits the process successfully
  .catch(error => {
      console.error(error); // logs error if any occurs
      process.exit(1); // exits the process with failure
  });
