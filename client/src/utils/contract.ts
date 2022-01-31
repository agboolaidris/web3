import { ethers } from 'ethers';
import { smart_address, contract_abi } from './constant';

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
