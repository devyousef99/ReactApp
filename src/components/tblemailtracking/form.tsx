import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblemailtrackingMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblemailtracking, updateTblemailtracking } from "services/tblemailtrackingService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblemailtrackingForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',user_id:'',email:'',language:'',created_date:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblemailtracking(values);
                if (response) {
                    dispatch(setTblemailtrackingMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblemailtrackingMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblemailtracking(values);
                if (response) {
                    dispatch(setTblemailtrackingMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblemailtrackingMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.string().required('survey_id is required'),
user_id: yup.string().required('user_id is required'),
email: yup.string().required('email is required'),
language: yup.string().required('language is required'),
created_date: yup.string().required('created_date is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblemailtracking
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblemailtracking</span>
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
<label className="form -control-label">email</label>
<Form.Control type="text" name="email" className="form-control" value={formik.values.email}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.email && !!formik.errors.email}
isValid ={!!formik.touched.email && !formik.errors.email}
></Form.Control>
{
    formik.errors.email && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.email}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">language</label>
<Form.Control type="text" name="language" className="form-control" value={formik.values.language}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.language && !!formik.errors.language}
isValid ={!!formik.touched.language && !formik.errors.language}
></Form.Control>
{
    formik.errors.language && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.language}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">created_date</label>
<Form.Control type="text" name="created_date" className="form-control" value={formik.values.created_date}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.created_date && !!formik.errors.created_date}
isValid ={!!formik.touched.created_date && !formik.errors.created_date}
></Form.Control>
{
    formik.errors.created_date && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.created_date}
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

