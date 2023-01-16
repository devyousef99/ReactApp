import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblquestionsMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblquestions, updateTblquestions } from "services/tblquestionsService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblquestionsForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',type:'',department:'',column_key:'',content:'',ar_content:'',html_name:'',html_name_comments:'',score:'',criteria:'',correct_answer:'',timer:'',created_timestamp:'',updated_timestamp:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblquestions(values);
                if (response) {
                    dispatch(setTblquestionsMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblquestionsMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblquestions(values);
                if (response) {
                    dispatch(setTblquestionsMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblquestionsMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.string().required('survey_id is required'),
type: yup.string().required('type is required'),
department: yup.string().required('department is required'),
column_key: yup.string().required('column_key is required'),
content: yup.string().required('content is required'),
ar_content: yup.string().required('ar_content is required'),
html_name: yup.string().required('html_name is required'),
html_name_comments: yup.string().required('html_name_comments is required'),
score: yup.string().required('score is required'),
criteria: yup.string().required('criteria is required'),
correct_answer: yup.string().required('correct_answer is required'),
timer: yup.string().required('timer is required'),
created_timestamp: yup.string().required('created_timestamp is required'),
updated_timestamp: yup.string().required('updated_timestamp is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblquestions
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblquestions</span>
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
<label className="form -control-label">type</label>
<Form.Control type="text" name="type" className="form-control" value={formik.values.type}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.type && !!formik.errors.type}
isValid ={!!formik.touched.type && !formik.errors.type}
></Form.Control>
{
    formik.errors.type && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.type}
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
<label className="form -control-label">content</label>
<Form.Control type="text" name="content" className="form-control" value={formik.values.content}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.content && !!formik.errors.content}
isValid ={!!formik.touched.content && !formik.errors.content}
></Form.Control>
{
    formik.errors.content && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.content}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">ar_content</label>
<Form.Control type="text" name="ar_content" className="form-control" value={formik.values.ar_content}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.ar_content && !!formik.errors.ar_content}
isValid ={!!formik.touched.ar_content && !formik.errors.ar_content}
></Form.Control>
{
    formik.errors.ar_content && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.ar_content}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">html_name</label>
<Form.Control type="text" name="html_name" className="form-control" value={formik.values.html_name}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.html_name && !!formik.errors.html_name}
isValid ={!!formik.touched.html_name && !formik.errors.html_name}
></Form.Control>
{
    formik.errors.html_name && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.html_name}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">html_name_comments</label>
<Form.Control type="text" name="html_name_comments" className="form-control" value={formik.values.html_name_comments}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.html_name_comments && !!formik.errors.html_name_comments}
isValid ={!!formik.touched.html_name_comments && !formik.errors.html_name_comments}
></Form.Control>
{
    formik.errors.html_name_comments && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.html_name_comments}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">score</label>
<Form.Control type="text" name="score" className="form-control" value={formik.values.score}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.score && !!formik.errors.score}
isValid ={!!formik.touched.score && !formik.errors.score}
></Form.Control>
{
    formik.errors.score && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.score}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">criteria</label>
<Form.Control type="text" name="criteria" className="form-control" value={formik.values.criteria}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.criteria && !!formik.errors.criteria}
isValid ={!!formik.touched.criteria && !formik.errors.criteria}
></Form.Control>
{
    formik.errors.criteria && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.criteria}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">correct_answer</label>
<Form.Control type="text" name="correct_answer" className="form-control" value={formik.values.correct_answer}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.correct_answer && !!formik.errors.correct_answer}
isValid ={!!formik.touched.correct_answer && !formik.errors.correct_answer}
></Form.Control>
{
    formik.errors.correct_answer && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.correct_answer}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">timer</label>
<Form.Control type="text" name="timer" className="form-control" value={formik.values.timer}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.timer && !!formik.errors.timer}
isValid ={!!formik.touched.timer && !formik.errors.timer}
></Form.Control>
{
    formik.errors.timer && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.timer}
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

