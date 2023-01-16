import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblcandidate {
id:number,
user_id:string,
survey_id:string,
session_id:string,
token:string,
triggered:string,
submitted:string,
status:string,
draft_answers:string,
total_answers:string,
department:string,
code:string,
timestamp:string
}

interface ITblcandidateData {
    list?: Array<ITblcandidate>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblcandidateData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblcandidateSlice = createSlice({
    name: "tblcandidate",
    initialState,
    reducers: {
        setTblcandidateList: (state, _action: PayloadAction<ITblcandidateData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblcandidateToInit: (state) => {
            state = initialState;
        },
        setTblcandidateMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblcandidateList, resetTblcandidateToInit, setTblcandidateMessage } = tblcandidateSlice.actions;

export default tblcandidateSlice.reducer;

