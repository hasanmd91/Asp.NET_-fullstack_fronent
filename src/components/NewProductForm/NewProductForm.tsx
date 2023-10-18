import React, { useEffect } from 'react';
import { Container, TextField, Alert, Typography, Box } from '@mui/material';
import {
  UseFormHandleSubmit,
  SubmitHandler,
  UseFormReset,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form';

import useAppSelector from '../../hooks/useAppSelector';
import { newProduct } from '../../types/product';
import Button from '../Button/Button';

type NewProductFormType = {
  handleSubmit: UseFormHandleSubmit<newProduct>;
  submitHandeler: SubmitHandler<newProduct>;
  reset: UseFormReset<newProduct>;
  errors: FieldErrors<newProduct>;
  register: UseFormRegister<newProduct>;
};

const NewProductForm: React.FC<NewProductFormType> = ({
  handleSubmit,
  submitHandeler,
  register,
  errors,
  reset,
}) => {
  const { error } = useAppSelector((state) => state.user);

  const { fields, append, remove } = useFieldArray({ name: 'images' });

  useEffect(() => {
    reset();
    remove();
  }, [reset, remove]);

  useEffect(() => {
    if (fields.length === 0) {
      append({});
    }
  }, [fields.length, append]);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Add new product
      </Typography>
      <form
        onSubmit={handleSubmit(submitHandeler)}
        noValidate
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <TextField
          type="text"
          id="title"
          label="Title"
          {...register('title')}
          helperText={errors.title?.message}
          error={errors.title ? true : false}
        />

        <TextField
          type="text"
          id="description"
          label="Description"
          {...register('description')}
          helperText={errors.description?.message}
          error={errors.description ? true : false}
        />

        <TextField
          type="number"
          id="price"
          label="Price"
          {...register('price')}
          helperText={errors.price?.message}
          error={errors.price ? true : false}
        />

        <TextField
          type="number"
          id="categoryId"
          label="CategoryId"
          {...register('categoryId')}
          helperText={errors.categoryId?.message}
          error={errors.categoryId ? true : false}
        />

        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{
              display: 'flex',
            }}
          >
            <TextField
              fullWidth
              type="text"
              id={`images[${index}]`}
              label="Image"
              {...register(`images.${index}`)}
              helperText={errors.images?.message}
              error={errors.images ? true : false}
            />
          </Box>
        ))}

        <Button
          sx={{ width: '150px' }}
          type="button"
          onClick={() => append(' ')}
        >
          Add Image
        </Button>

        <Box>
          <Button sx={{ marginRight: '10px' }} onClick={() => handleSubmit}>
            Submit
          </Button>
          <Button type="reset" onClick={() => reset()}>
            Reset
          </Button>
        </Box>
      </form>
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
};

export default NewProductForm;
