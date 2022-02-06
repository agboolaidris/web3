import React, { useState, useEffect, createContext, ReactNode } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';

interface TransactionContextType {
  userAccount: string;
  connectToWallet: () => void;
}
const initialState = {
  userAccount: '',
  connectToWallet: () => null,
};
export const TransactionContext =
  createContext<TransactionContextType>(initialState);

const Modal = styled(Dialog)`
  & > div {
    align-items: flex-start;
    background: transparent !important;
  }
`;

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [userAccount, setUserAccount] = useState('');
  const [open, setOpen] = useState(false);

  const connectToWallet = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) setOpen(true);
      else {
        const account = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        setUserAccount(account[0]);
      }
    } catch (error) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const { ethereum } = window as any;
    const checkedIFWalletIsConnected = async () => {
      try {
        if (!ethereum) setOpen(true);
        else {
          await ethereum.enable();
          const account = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          if (account.length > 0) {
            setUserAccount(account[0]);
          }
        }
      } catch (error) {
        setOpen(true);
      }
    };
    checkedIFWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ userAccount, connectToWallet }}>
      <Modal
        open={open}
        sx={{ justifyContent: 'flex-start' }}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Install and Connect Metamask</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            MetaMask is not connected to this site. To connect to a web3 site,
            install Metamask and click the connect button.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>ok</Button>
        </DialogActions>
      </Modal>
      {children}
    </TransactionContext.Provider>
  );
};
