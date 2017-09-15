pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract Vukt is MintableToken {
    string public name = "Validity\'s Useless Kitten Token";
    string public symbol = "VUKT";
    uint8 public decimals = 18;

    event deliverKittens(uint256 numKittens, address recipient);

    function requestKittens(uint256 numKittens) {
        require (balances[msg.sender] >= numKittens);
        balances[msg.sender] -= numKittens;
        deliverKittens(numKittens, msg.sender);
    }
}