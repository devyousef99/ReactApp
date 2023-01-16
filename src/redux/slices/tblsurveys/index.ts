import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITblsurveys {
id:number,
name:string,
name_ar:string,
type:string,
email:string,
views:number,
start_date:string,
end_date:string,
status:string,
JSON:string,
save_draft:string,
created_at:number
}

interface ITblsurveysData {
    list?: Array<ITblsurveys>;
    pageNo: number;
    pageSize: number;
    searchKey?: string;
    totalCount?: number;
    message?: string;
}

const initialState: ITblsurveysData = {
    pageNo: 1,
    pageSize: 20,
    searchKey: '',
    list: [],
    totalCount: 0,
    message: '',
};

const tblsurveysSlice = createSlice({
    name: "tblsurveys",
    initialState,
    reducers: {
        setTblsurveysList: (state, _action: PayloadAction<ITblsurveysData>) => {
            state.list = _action.payload.list;
            state.pageNo = _action.payload.pageNo;
            state.pageSize = _action.payload.pageSize;
            state.totalCount = _action.payload.totalCount;
        },
        resetTblsurveysToInit: (state) => {
            state = initialState;
        },
        setTblsurveysMessage: (state, _action: PayloadAction<string>) => {
            state.message = _action.payload;
        },
    },
});

export const { setTblsurveysList, resetTblsurveysToInit, setTblsurveysMessage } = tblsurveysSlice.actions;

export default tblsurveysSlice.reducer;

