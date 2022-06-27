"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncGetThunk = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = require("axios");
function createAsyncGetThunk(url) {
    return (0, toolkit_1.createAsyncThunk)(`${url}/get`, () => __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield axios_1.default.get(url)).data;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError)
                return Promise.reject(error.message);
        }
    }));
}
exports.createAsyncGetThunk = createAsyncGetThunk;
