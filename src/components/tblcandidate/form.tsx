import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblcandidateMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblcandidate, updateTblcandidate } from "services/tblcandidateService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblcandidateForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',user_id:'',survey_id:'',session_id:'',token:'',triggered:'',submitted:'',status:'',draft_answers:'',total_answers:'',department:'',code:'',timestamp:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblcandidate(values);
                if (response) {
                    dispatch(setTblcandidateMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblcandidateMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblcandidate(values);
                if (response) {
                    dispatch(setTblcandidateMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblcandidateMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           user_id: yup.string().required('user_id is required'),
survey_id: yup.string().required('survey_id is required'),
session_id: yup.string().required('session_id is required'),
token: yup.string().required('token is required'),
triggered: yup.string().required('triggered is required'),
submitted: yup.string().required('submitted is required'),
status: yup.string().required('status is required'),
draft_answers: yup.string().required('draft_answers is required'),
total_answers: yup.string().required('total_answers is required'),
department: yup.string().required('department is required'),
code: yup.string().required('code is required'),
timestamp: yup.string().required('timestamp is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblcandidate
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblcandidate</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
<label className="form -control-label">user_id</label>
<Form.Control type="text" name="user_id" className="form-control" value={formik.values.user_id}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.user_id && !!formik.errors.user_id}
isValid ={!!formik.touched.user_id && !formik.errors.user_id}
></Form.Control>
{
    formik.errors.user_id && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.user_id}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">survey_id</label>
<Form.Control type="text" name="survey_id" className="form-control" value={formik.values.survey_id}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.survey_id && !!formik.errors.survey_id}
isValid ={!!formik.touched.survey_id && !formik.errors.survey_id}
></Form.Control>
{
    formik.errors.survey_id && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.survey_id}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">session_id</label>
<Form.Control type="text" name="session_id" className="form-control" value={formik.values.session_id}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.session_id && !!formik.errors.session_id}
isValid ={!!formik.touched.session_id && !formik.errors.session_id}
></Form.Control>
{
    formik.errors.session_id && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.session_id}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">token</label>
<Form.Control type="text" name="token" className="form-control" value={formik.values.token}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.token && !!formik.errors.token}
isValid ={!!formik.touched.token && !formik.errors.token}
></Form.Control>
{
    formik.errors.token && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.token}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">triggered</label>
<Form.Control type="text" name="triggered" className="form-control" value={formik.values.triggered}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.triggered && !!formik.errors.triggered}
isValid ={!!formik.touched.triggered && !formik.errors.triggered}
></Form.Control>
{
    formik.errors.triggered && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.triggered}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">submitted</label>
<Form.Control type="text" name="submitted" className="form-control" value={formik.values.submitted}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.submitted && !!formik.errors.submitted}
isValid ={!!formik.touched.submitted && !formik.errors.submitted}
></Form.Control>
{
    formik.errors.submitted && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.submitted}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">status</label>
<Form.Control type="text" name="status" className="form-control" value={formik.values.status}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.status && !!formik.errors.status}
isValid ={!!formik.touched.status && !formik.errors.status}
></Form.Control>
{
    formik.errors.status && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.status}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">draft_answers</label>
<Form.Control type="text" name="draft_answers" className="form-control" value={formik.values.draft_answers}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.draft_answers && !!formik.errors.draft_answers}
isValid ={!!formik.touched.draft_answers && !formik.errors.draft_answers}
></Form.Control>
{
    formik.errors.draft_answers && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.draft_answers}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">total_answers</label>
<Form.Control type="text" name="total_answers" className="form-control" value={formik.values.total_answers}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.total_answers && !!formik.errors.total_answers}
isValid ={!!formik.touched.total_answers && !formik.errors.total_answers}
></Form.Control>
{
    formik.errors.total_answers && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.total_answers}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">department</label>
<Form.Control type="text" name="department" className="form-control" value={formik.values.department}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.department && !!formik.errors.department}
isValid ={!!formik.touched.department && !formik.errors.department}
></Form.Control>
{
    formik.errors.department && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.department}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">code</label>
<Form.Control type="text" name="code" className="form-control" value={formik.values.code}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.code && !!formik.errors.code}
isValid ={!!formik.touched.code && !formik.errors.code}
></Form.Control>
{
    formik.errors.code && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.code}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">timestamp</label>
<Form.Control type="text" name="timestamp" className="form-control" value={formik.values.timestamp}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.timestamp && !!formik.errors.timestamp}
isValid ={!!formik.touched.timestamp && !formik.errors.timestamp}
></Form.Control>
{
    formik.errors.timestamp && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.timestamp}
    </Form.Control.Feedback>
)}
</Form.Group>

                    <Form.Group>
                        <Button type="submit" className="float-right" variant="primary">Save</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

