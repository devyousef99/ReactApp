import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblusers {
id:number,
survey_id:number,
fname:string,
lname:string,
job_title:string,
email:string,
phone_number:string,
password:string,
contact:string,
Hire_Date:string,
prn:string,
address:string,
groups:string,
city:string,
country:string,
role:string,
permissions:string,
is_admin:string,
is_guest:string,
bu:string,
department:string,
actives:string,
submitted:string,
created_timestamp:string,
updated_timestamp:string
}

interface ITblusersData {
    list?: Array<ITblusers>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblusersData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblusersSlice = createSlice({
    name: "tblusers",
    initialState,
    reducers: {
        setTblusersList: (state, _action: PayloadAction<ITblusersData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblusersToInit: (state) => {
            state = initialState;
        },
        setTblusersMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblusersList, resetTblusersToInit, setTblusersMessage } = tblusersSlice.actions;

export default tblusersSlice.reducer;

