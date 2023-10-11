import React from 'react';
import useAppSelector from '../Hooks/useAppSelector';
import { userRole } from '../types/user';

type CustomerAuthGurdType = {
  children: React.ReactElement;
};

const CustomerAuthGurd: React.FC<CustomerAuthGurdType> = ({ children }) => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return currentUser?.role === userRole.customer ? <>{children}</> : null;
};

export default CustomerAuthGurd;
