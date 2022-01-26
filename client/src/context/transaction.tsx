import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { ethers } from 'ethers';
import { smart_address, contract_abi } from '../utils/constant';

const getEthereumContract = () => {
  const { ethereum } = window;
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
  const [userWallet, setUserWallet] = useState('');
  useEffect(() => {
    const { ethereum } = window;
    const checkedIFWalletIsConnected = async () => {
      if (!ethereum) return alert('install metamask');
      else {
        const account = await ethereum.request({ method: 'eth_accounts' });
        if (account.length > 0) {
          setUserWallet(account[0]);
        }
      }
    };
    checkedIFWalletIsConnected();
  }, []);

  const connectToWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return alert('install metamask');
      else {
        const account = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log(account);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TransactionContext.Provider value={{ connectToWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
