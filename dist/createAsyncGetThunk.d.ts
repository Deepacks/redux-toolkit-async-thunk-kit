import { AsyncThunk } from "@reduxjs/toolkit";
export declare function createAsyncGetThunk<T>(url: string): AsyncThunk<T | undefined, void, {}>;
