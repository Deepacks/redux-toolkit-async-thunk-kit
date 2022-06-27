import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export function createAsyncPostThunk<In, Out = string>(
  url: string,
  data: In
): AsyncThunk<Out | undefined, In, {}> {
  return createAsyncThunk(`${url}/post`, async () => {
    try {
      return (await axios.post(url, data)).data as Out;
    } catch (error) {
      if (error instanceof AxiosError) return Promise.reject(error.message);
    }
  });
}
