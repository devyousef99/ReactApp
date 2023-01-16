import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblmailing_Group {
id:number,
survey_id:number,
name:string,
email:string,
created_by:string,
created_at:string
}

interface ITblmailing_GroupData {
    list?: Array<ITblmailing_Group>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblmailing_GroupData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblmailing_groupSlice = createSlice({
    name: "tblmailing_group",
    initialState,
    reducers: {
        setTblmailing_GroupList: (state, _action: PayloadAction<ITblmailing_GroupData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblmailing_GroupToInit: (state) => {
            state = initialState;
        },
        setTblmailing_GroupMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblmailing_GroupList, resetTblmailing_GroupToInit, setTblmailing_GroupMessage } = tblmailing_groupSlice.actions;

export default tblmailing_groupSlice.reducer;

