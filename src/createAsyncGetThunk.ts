import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export function createAsyncGetThunk<T>(
  url: string
): AsyncThunk<T | undefined, void, {}> {
  return createAsyncThunk(`${url}/get`, async () => {
    try {
      return (await axios.get(url)).data as T;
    } catch (error) {
      if (error instanceof AxiosError) return Promise.reject(error.message);
    }
  });
}
