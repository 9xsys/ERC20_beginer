const { ethers } = require("hardhat");

async function main() {
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();
  await test.demo(42); // Ce log apparaîtra dans la console
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});