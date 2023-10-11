import React, { useEffect } from 'react';
import { Alert, Box, CircularProgress, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import useAppSelector from '../Hooks/useAppSelector';
import useAppDispatch from '../Hooks/useAppDispatch';
import { getAllProductsAsync } from '../redux/methods/productMethod';
import MediaCard from '../components/card/Card';
import CenteredContainer from '../components/CenterContainer/CenterContainer';
import Pagination from '../components/Pagination/Pagination';
import { usePagination } from '../Hooks/usePagination';
import FilterBar from '../components/FilterBar/FilterBar';

const ProductList = () => {
  const { products, status, error } = useAppSelector((state) => state.product);

  const { currentPage, pageLimit, currentProducts, setPage } = usePagination(
    products,
    20
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <CenteredContainer>
        <CircularProgress color="error" size="5rem" />
      </CenteredContainer>
    );
  }

  if (error) {
    return (
      <CenteredContainer>
        <Alert security="error">{error}</Alert>;
      </CenteredContainer>
    );
  }

  return currentProducts.length > 0 ? (
    <Container maxWidth="xl" sx={{ marginTop: '2rem' }}>
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FilterBar />
        {currentProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <MediaCard product={product} />
          </Link>
        ))}

        <Pagination
          count={pageLimit}
          currentPage={currentPage}
          setPage={setPage}
        />
      </Box>
    </Container>
  ) : null;
};

export default ProductList;
