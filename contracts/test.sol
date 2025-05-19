// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test {
    uint256 public stored;

    function store(uint256 _val) public {
        console.log("Storing value:", _val);
        require(_val < 100, "Value too high");
        stored = _val;
    }
}
