import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblemailtracking {
id:number,
survey_id:string,
user_id:string,
email:string,
language:string,
created_date:string
}

interface ITblemailtrackingData {
    list?: Array<ITblemailtracking>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblemailtrackingData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblemailtrackingSlice = createSlice({
    name: "tblemailtracking",
    initialState,
    reducers: {
        setTblemailtrackingList: (state, _action: PayloadAction<ITblemailtrackingData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblemailtrackingToInit: (state) => {
            state = initialState;
        },
        setTblemailtrackingMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblemailtrackingList, resetTblemailtrackingToInit, setTblemailtrackingMessage } = tblemailtrackingSlice.actions;

export default tblemailtrackingSlice.reducer;

