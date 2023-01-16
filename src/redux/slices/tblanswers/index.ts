import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblanswers {
id:number,
survey_id:string,
session_id:string,
user_id:string,
question_id:string,
question_type:string,
department:string,
column_key:string,
answer:string,
comments:string,
created_timestamp:string,
updated_timestamp:string
}

interface ITblanswersData {
    list?: Array<ITblanswers>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblanswersData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblanswersSlice = createSlice({
    name: "tblanswers",
    initialState,
    reducers: {
        setTblanswersList: (state, _action: PayloadAction<ITblanswersData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblanswersToInit: (state) => {
            state = initialState;
        },
        setTblanswersMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblanswersList, resetTblanswersToInit, setTblanswersMessage } = tblanswersSlice.actions;

export default tblanswersSlice.reducer;

