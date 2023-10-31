// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./TokenContract.sol";

contract TokenFactory {
    struct Token {
        string name;
        string symbol;
        uint256 initialSupply;
        address tokenContract;
    }

    Token[] public tokens;

    function createToken(string memory name, string memory symbol, uint256 initialSupply) public {
        TokenContract tokenContract = new TokenContract(name, symbol, initialSupply, msg.sender);
        tokens.push(Token(name, symbol, initialSupply, address(tokenContract)));
    }
}
