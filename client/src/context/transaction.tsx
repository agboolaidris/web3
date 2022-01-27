import React, { useState, useEffect, createContext, ReactNode } from 'react';

export const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [userAccount, setUserAccount] = useState('');
  useEffect(() => {
    const { ethereum } = window as any;
    const checkedIFWalletIsConnected = async () => {
      if (!ethereum) return alert('install metamask');
      else {
        const account = await ethereum.request({ method: 'eth_accounts' });
        if (account.length > 0) {
          setUserAccount(account[0]);
        }
      }
    };
    checkedIFWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ userAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
