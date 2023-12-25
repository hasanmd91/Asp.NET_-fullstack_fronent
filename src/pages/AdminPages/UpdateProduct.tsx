import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newProduct } from '../../types/product';
import { productSchema } from '../../validation/productSchema';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import useAppDispatch from '../../hooks/useAppDispatch';
import {
  createNewProductAsync,
  getAProductsAsync,
  updateProductAsync,
} from '../../redux/thunks/productThunk';
import { useParams } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import { Alert, CircularProgress } from '@mui/material';
import CenteredContainer from '../../components/CenterContainer/CenterContainer';

const UpdateProduct = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const dispatch = useAppDispatch();

  const { product } = useAppSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getAProductsAsync(id));
  }, [dispatch, id]);

  const submitHandeler: SubmitHandler<newProduct> = (data: newProduct) => {
    console.log(id, data);

    id && dispatch(updateProductAsync({ id: id, updatedData: data }));
  };

  if (!product) {
    return (
      <CenteredContainer>
        <CircularProgress color="error" size="5rem" />
      </CenteredContainer>
    );
  }

  return (
    <form onSubmit={handleSubmit(submitHandeler)}>
      <Controller
        name="title"
        defaultValue={product.title}
        control={control}
        render={({ field }) => (
          <TextField
            label="Title"
            {...field}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <Controller
        name="description"
        defaultValue={product.description}
        control={control}
        render={({ field }) => (
          <TextField
            label="Description"
            {...field}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />
      <Controller
        name="price"
        defaultValue={product.price}
        control={control}
        render={({ field }) => (
          <TextField
            label="Price"
            type="number"
            {...field}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
        )}
      />
      <Controller
        name="quantity"
        defaultValue={product.quantity}
        control={control}
        render={({ field }) => (
          <TextField
            label="Quantity"
            type="number"
            {...field}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
        )}
      />
      <Controller
        name="CategoryId"
        defaultValue={product.categoryId}
        render={({ field }) => (
          <TextField
            label="Category ID"
            {...field}
            error={!!errors.CategoryId}
            helperText={errors.CategoryId?.message}
          />
        )}
      />
      <Controller
        name={`images.${0}.imageUrl`}
        defaultValue={product?.images[0]?.imageUrl}
        control={control}
        render={({ field }) => (
          <TextField
            label="Image URL 1"
            {...field}
            error={!!errors.images?.[0]?.imageUrl}
            helperText={errors.images?.[0]?.imageUrl?.message}
          />
        )}
      />
      <Controller
        name={`images.${1}.imageUrl`}
        defaultValue={product?.images[1]?.imageUrl}
        control={control}
        render={({ field }) => (
          <TextField
            label="Image URL 2"
            {...field}
            error={!!errors.images?.[1]?.imageUrl}
            helperText={errors.images?.[1]?.imageUrl?.message}
          />
        )}
      />
      <Controller
        name={`images.${2}.imageUrl`}
        defaultValue={product?.images[2]?.imageUrl}
        control={control}
        render={({ field }) => (
          <TextField
            label="Image URL 3"
            {...field}
            error={!!errors.images?.[2]?.imageUrl}
            helperText={errors.images?.[2]?.imageUrl?.message}
          />
        )}
      />
      <Button fullWidth> Update</Button>
    </form>
  );
};

export default UpdateProduct;
