const hre = require("hardhat");

async function main() {
  // Retrieve the contract factory
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  console.log("Deploying contract...");
  
  // Deploy the contract
  const greeter = await Greeter.deploy("Hello World");

  // Wait for the deployment to be mined
  await greeter.deployTransaction.wait();

  console.log(`Contract successfully deployed to ${greeter.address}`);
}

// Execute the main function
main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
