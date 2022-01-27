import { ethers } from 'ethers';
import { smart_address, contract_abi } from '../utils/constant';

export const getEthereumContract = () => {
  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    smart_address,
    contract_abi,
    signer
  );
  return transactionContract;
};

export const connectToWallet = async () => {
  try {
    const { ethereum } = window as any;
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
