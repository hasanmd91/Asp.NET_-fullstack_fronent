import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import axiosInstance from '../../shared/axiosInstance';
import {
  emailType,
  isEmailAvailable,
  registerUser,
  user,
  updateUserDataType,
} from '../../types/user';

/* GET ALL USER METHOD*/

export const getAllUsersAsync = createAsyncThunk(
  'getAllUsersAsync',
  async () => {
    try {
      const response = await axiosInstance.get<user[]>('users');
      const users: user[] = response.data;
      return users;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }
);

/* GET A SINGLE USER METHOD*/

export const getAUsersAsync = createAsyncThunk(
  'getAUsersAsync',
  async (userId: number) => {
    try {
      const response = await axiosInstance.get<user>(`users/${userId}`);
      const users: user = response.data;
      return users;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }
);

/* CREATE A USER METHOD*/

export const createNewUserAsync = createAsyncThunk(
  'createNewUserAsync',
  async (newUser: registerUser, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<user>('users', newUser);
      const newCreatedUser: user = response.data;
      return newCreatedUser;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err);
    }
  }
);

/* UPDATE A USER METHOD*/

export const updateUserAsync = createAsyncThunk(
  'updateUserAsync',
  async ({ data, id }: updateUserDataType) => {
    try {
      const response = await axiosInstance.put<user>(`users/${id}`, data);
      const updatedUser: user = response.data;
      return updatedUser;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }
);

/* CHECK EMAIL IS AVAILABLE*/

export const isEmailAvailableAsync = createAsyncThunk(
  'isEmailAvailableAsync',
  async (emailData: emailType) => {
    try {
      const response = await axiosInstance.put<isEmailAvailable>(
        'users/is-available',
        emailData
      );

      return response.data.isAvailable;
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }
);
