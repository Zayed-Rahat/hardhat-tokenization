// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenContract is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply, address _owner) ERC20(name, symbol) {
        _mint(_owner, initialSupply);
    }

    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}