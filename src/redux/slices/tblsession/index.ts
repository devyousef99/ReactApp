import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblsession {
id:number,
survey_id:string,
user_id:string,
public_ip:string,
json:string,
correct_answers:string,
incorrect_answers:string,
total_answers:string,
score:string,
timer:string,
status:string,
created_at:string
}

interface ITblsessionData {
    list?: Array<ITblsession>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblsessionData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblsessionSlice = createSlice({
    name: "tblsession",
    initialState,
    reducers: {
        setTblsessionList: (state, _action: PayloadAction<ITblsessionData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblsessionToInit: (state) => {
            state = initialState;
        },
        setTblsessionMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblsessionList, resetTblsessionToInit, setTblsessionMessage } = tblsessionSlice.actions;

export default tblsessionSlice.reducer;

