const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test contract", function () {
  it("Should store a valid value", async function () {
    const Test = await ethers.getContractFactory("Test");
    const test = await Test.deploy();

    await test.store(42); // ✅ Devrait marcher, console.log visible
    expect(await test.stored()).to.equal(42);
  });

  it("Should revert on invalid value", async function () {
    const Test = await ethers.getContractFactory("Test");
    const test = await Test.deploy();

    await expect(test.store(150)).to.be.revertedWith("Value too high");
  });
});
