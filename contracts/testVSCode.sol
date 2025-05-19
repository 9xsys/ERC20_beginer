// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test {
    function demo(uint256 a) pure public {
        console.log("Value of a:", a);
    }
}