pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'zeppelin-solidity/contracts/token/MintableToken.sol';
import './Vukt.sol';

contract Vsale is Crowdsale {
    function Vsale() Crowdsale(block.number, block.number + 100000, 2, msg.sender) {
    }

    // override base contract function
    function createTokenContract() internal returns (MintableToken) {
        return new Vukt();
    }
}