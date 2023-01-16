import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblanswersMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblanswers, updateTblanswers } from "services/tblanswersService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblanswersForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',session_id:'',user_id:'',question_id:'',question_type:'',department:'',column_key:'',answer:'',comments:'',created_timestamp:'',updated_timestamp:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblanswers(values);
                if (response) {
                    dispatch(setTblanswersMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblanswersMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblanswers(values);
                if (response) {
                    dispatch(setTblanswersMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblanswersMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.string().required('survey_id is required'),
session_id: yup.string().required('session_id is required'),
user_id: yup.string().required('user_id is required'),
question_id: yup.string().required('question_id is required'),
question_type: yup.string().required('question_type is required'),
department: yup.string().required('department is required'),
column_key: yup.string().required('column_key is required'),
answer: yup.string().required('answer is required'),
comments: yup.string().required('comments is required'),
created_timestamp: yup.string().required('created_timestamp is required'),
updated_timestamp: yup.string().required('updated_timestamp is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblanswers
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblanswers</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
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
<label className="form -control-label">question_id</label>
<Form.Control type="text" name="question_id" className="form-control" value={formik.values.question_id}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.question_id && !!formik.errors.question_id}
isValid ={!!formik.touched.question_id && !formik.errors.question_id}
></Form.Control>
{
    formik.errors.question_id && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.question_id}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">question_type</label>
<Form.Control type="text" name="question_type" className="form-control" value={formik.values.question_type}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.question_type && !!formik.errors.question_type}
isValid ={!!formik.touched.question_type && !formik.errors.question_type}
></Form.Control>
{
    formik.errors.question_type && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.question_type}
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
<label className="form -control-label">column_key</label>
<Form.Control type="text" name="column_key" className="form-control" value={formik.values.column_key}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.column_key && !!formik.errors.column_key}
isValid ={!!formik.touched.column_key && !formik.errors.column_key}
></Form.Control>
{
    formik.errors.column_key && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.column_key}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">answer</label>
<Form.Control type="text" name="answer" className="form-control" value={formik.values.answer}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.answer && !!formik.errors.answer}
isValid ={!!formik.touched.answer && !formik.errors.answer}
></Form.Control>
{
    formik.errors.answer && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.answer}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">comments</label>
<Form.Control type="text" name="comments" className="form-control" value={formik.values.comments}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.comments && !!formik.errors.comments}
isValid ={!!formik.touched.comments && !formik.errors.comments}
></Form.Control>
{
    formik.errors.comments && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.comments}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">created_timestamp</label>
<Form.Control type="text" name="created_timestamp" className="form-control" value={formik.values.created_timestamp}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.created_timestamp && !!formik.errors.created_timestamp}
isValid ={!!formik.touched.created_timestamp && !formik.errors.created_timestamp}
></Form.Control>
{
    formik.errors.created_timestamp && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.created_timestamp}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">updated_timestamp</label>
<Form.Control type="text" name="updated_timestamp" className="form-control" value={formik.values.updated_timestamp}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.updated_timestamp && !!formik.errors.updated_timestamp}
isValid ={!!formik.touched.updated_timestamp && !formik.errors.updated_timestamp}
></Form.Control>
{
    formik.errors.updated_timestamp && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.updated_timestamp}
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

