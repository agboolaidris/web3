import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { ethers } from 'ethers';
import { smart_address, contract_abi } from '../utils/constant';

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    smart_address,
    contract_abi,
    signer
  );
  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const { ethereum } = window;
    const checkedIFWalletIsConnected = async () => {
      if (!ethereum) return alert('install metamask');
      else {
        const account = await ethereum.request({ method: 'eth_accounts' });
        console.log(account);
      }
    };
    checkedIFWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ value: 'ade' }}>
      {children}
    </TransactionContext.Provider>
  );
};
