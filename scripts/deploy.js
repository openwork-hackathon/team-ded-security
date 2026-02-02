const hre = require("hardhat");

async function main() {
  console.log("Deploying contracts to", hre.network.name);

  // 1. Deploy Mock Token (OPENWORK) - only for Testnet!
  // In Mainnet we use real address.
  let tokenAddress;
  if (hre.network.name === "baseSepolia" || hre.network.name === "localhost") {
    console.log("Deploying Mock Token...");
    const Token = await hre.ethers.getContractFactory("MockToken");
    // We need to create MockToken contract first if we want to test fully isolated.
    // For now, let's assume we deploy one.
    // actually, let's just use a placeholder or deploy a simple ERC20.
  } else {
    tokenAddress = "0x299c30DD5974BF4D5bFE42C340CA40462816AB07"; // Mainnet
  }

  // 2. Deploy BountyVault
  const [deployer] = await hre.ethers.getSigners();
  const oracleAddress = deployer.address; // Currently deployer is oracle

  // If testnet, we deploy a mock token quickly inline if possible, or we need a file.
  // Let's create a MockToken.sol first.
  
  console.log("Deploying Vault...");
  const Vault = await hre.ethers.getContractFactory("BountyVault");
  // For testnet, we need a token address. Let's use a known testnet token or deploy one.
  // Using WETH on Base Sepolia: 0x4200000000000000000000000000000000000006 (as placeholder)
  const token = tokenAddress || "0x4200000000000000000000000000000000000006"; 

  const vault = await Vault.deploy(token, oracleAddress);
  await vault.waitForDeployment();

  console.log("BountyVault deployed to:", vault.target);
  console.log("Token:", token);
  console.log("Oracle:", oracleAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
