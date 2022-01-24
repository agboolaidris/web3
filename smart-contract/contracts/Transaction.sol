// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
contract Transaction{
    uint256 transactionCount;
    event Transfer(address from, address reciever, uint amount, string message, string keyword, uint256 timestamp);

    struct TransferStruct{
        address from;
        address reciever;
        uint amount;
        string message;
        string keyword;
        uint256 timestamp;
    }

   TransferStruct[] transactions;

function addToBlockChain(address payable reciever, uint amount, string memory message, string memory keyword) public{
    transactionCount += 1; 
    transactions.push(TransferStruct(msg.sender, reciever, amount, message,  keyword,  block.timestamp));
    emit Transfer(msg.sender, reciever, amount, message,  keyword,  block.timestamp);
}

function getAllTransaction() public view returns (TransferStruct[] memory) {
  return transactions;
}

function getTransactionCount()public view returns(uint256){
    return transactionCount;
}
}