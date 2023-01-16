import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblsessionMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblsession, updateTblsession } from "services/tblsessionService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblsessionForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',user_id:'',public_ip:'',json:'',correct_answers:'',incorrect_answers:'',total_answers:'',score:'',timer:'',status:'',created_at:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblsession(values);
                if (response) {
                    dispatch(setTblsessionMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblsessionMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblsession(values);
                if (response) {
                    dispatch(setTblsessionMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblsessionMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.string().required('survey_id is required'),
user_id: yup.string().required('user_id is required'),
public_ip: yup.string().required('public_ip is required'),
json: yup.string().required('json is required'),
correct_answers: yup.string().required('correct_answers is required'),
incorrect_answers: yup.string().required('incorrect_answers is required'),
total_answers: yup.string().required('total_answers is required'),
score: yup.string().required('score is required'),
timer: yup.string().required('timer is required'),
status: yup.string().required('status is required'),
created_at: yup.string().required('created_at is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblsession
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblsession</span>
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
<label className="form -control-label">public_ip</label>
<Form.Control type="text" name="public_ip" className="form-control" value={formik.values.public_ip}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.public_ip && !!formik.errors.public_ip}
isValid ={!!formik.touched.public_ip && !formik.errors.public_ip}
></Form.Control>
{
    formik.errors.public_ip && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.public_ip}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">json</label>
<Form.Control type="text" name="json" className="form-control" value={formik.values.json}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.json && !!formik.errors.json}
isValid ={!!formik.touched.json && !formik.errors.json}
></Form.Control>
{
    formik.errors.json && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.json}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">correct_answers</label>
<Form.Control type="text" name="correct_answers" className="form-control" value={formik.values.correct_answers}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.correct_answers && !!formik.errors.correct_answers}
isValid ={!!formik.touched.correct_answers && !formik.errors.correct_answers}
></Form.Control>
{
    formik.errors.correct_answers && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.correct_answers}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">incorrect_answers</label>
<Form.Control type="text" name="incorrect_answers" className="form-control" value={formik.values.incorrect_answers}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.incorrect_answers && !!formik.errors.incorrect_answers}
isValid ={!!formik.touched.incorrect_answers && !formik.errors.incorrect_answers}
></Form.Control>
{
    formik.errors.incorrect_answers && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.incorrect_answers}
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
<label className="form -control-label">created_at</label>
<Form.Control type="text" name="created_at" className="form-control" value={formik.values.created_at}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.created_at && !!formik.errors.created_at}
isValid ={!!formik.touched.created_at && !formik.errors.created_at}
></Form.Control>
{
    formik.errors.created_at && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.created_at}
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

