import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblquestions {
id:number,
survey_id:string,
type:string,
department:string,
column_key:string,
content:string,
ar_content:string,
html_name:string,
html_name_comments:string,
score:string,
criteria:string,
correct_answer:string,
timer:string,
created_timestamp:string,
updated_timestamp:string
}

interface ITblquestionsData {
    list?: Array<ITblquestions>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblquestionsData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblquestionsSlice = createSlice({
    name: "tblquestions",
    initialState,
    reducers: {
        setTblquestionsList: (state, _action: PayloadAction<ITblquestionsData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblquestionsToInit: (state) => {
            state = initialState;
        },
        setTblquestionsMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblquestionsList, resetTblquestionsToInit, setTblquestionsMessage } = tblquestionsSlice.actions;

export default tblquestionsSlice.reducer;

