import { Box } from '@mui/material';
import React from 'react';
import Button from '../Button/Button';
import { shades } from '../../Theme';
import Link from '../Link/Link';

type AdminSideBarPropsType = {};

const AdminSideBar: React.FC<AdminSideBarPropsType> = () => {
  return (
    <Box
      sx={{
        backgroundColor: shades.primary[500],
        padding: '20px',
        minHeight: '70vh',
      }}
    >
      <Link to={'/admidashbord/addProduct'}>
        <Button fullWidth> Add product</Button>
      </Link>

      <Link to={'/admidashbord/addCategory'}>
        <Button fullWidth>Add Category</Button>
      </Link>

      <Link to={'/admidashbord/allCategory'}>
        <Button fullWidth>All Category List</Button>
      </Link>

      <Button fullWidth>All Product List</Button>
      <Button fullWidth>Add Category</Button>
      <Button fullWidth>User List</Button>
      <Button fullWidth>Order List</Button>
    </Box>
  );
};

export default AdminSideBar;
