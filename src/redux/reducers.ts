import { combineReducers } from "redux";

import template from "redux/slices/template";
import authToken from "redux/slices/auth";

import tblusers from "redux/slices/tblusers";
import tblsurveys from "redux/slices/tblsurveys";
import tblsession from "redux/slices/tblsession";
import tblquestions from "redux/slices/tblquestions";
import tblemailtracking from "redux/slices/tblemailtracking";
import tblcandidate from "redux/slices/tblcandidate";
import tblanswers from "redux/slices/tblanswers";
import tblmailing_group from "redux/slices/tblmailing_group";


const rootReducer = combineReducers({ template,authToken,tblusers,tblsurveys,tblsession,tblquestions,tblemailtracking,tblcandidate,tblanswers,tblmailing_group });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

