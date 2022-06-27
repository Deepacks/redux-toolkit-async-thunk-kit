import { AsyncThunk } from "@reduxjs/toolkit";
export declare function createAsyncPostThunk<In, Out = string>(url: string, data: In): AsyncThunk<Out | undefined, In, {}>;
