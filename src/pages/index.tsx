import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login";
import Register from "./register";
import AuthenticatedRoute from "components/auth";
import { Dashboard } from "components/dashboard";
import { FileUpload } from "components/upload";
import { NotFound } from "./404";
import { Tblusers, Tblsurveys, Tblsession, Tblquestions, Tblemailtracking, Tblcandidate, Tblanswers, Tblmailing_Group} from "components";
const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<AuthenticatedRoute element={<Dashboard />} />}></Route>
        <Route path="/upload" element={<AuthenticatedRoute element={<FileUpload />} />}></Route>
        <Route path="/tblusers" element={<AuthenticatedRoute element={<Tblusers />} />}></Route>
<Route path="/tblsurveys" element={<AuthenticatedRoute element={<Tblsurveys />} />}></Route>
<Route path="/tblsession" element={<AuthenticatedRoute element={<Tblsession />} />}></Route>
<Route path="/tblquestions" element={<AuthenticatedRoute element={<Tblquestions />} />}></Route>
<Route path="/tblemailtracking" element={<AuthenticatedRoute element={<Tblemailtracking />} />}></Route>
<Route path="/tblcandidate" element={<AuthenticatedRoute element={<Tblcandidate />} />}></Route>
<Route path="/tblanswers" element={<AuthenticatedRoute element={<Tblanswers />} />}></Route>
<Route path="/tblmailing_group" element={<AuthenticatedRoute element={<Tblmailing_Group />} />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;

