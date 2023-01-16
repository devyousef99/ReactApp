import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblusersMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblusers, updateTblusers } from "services/tblusersService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblusersForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',fname:'',lname:'',job_title:'',email:'',phone_number:'',password:'',contact:'',Hire_Date:'',prn:'',address:'',groups:'',city:'',country:'',role:'',permissions:'',is_admin:'',is_guest:'',bu:'',department:'',actives:'',submitted:'',created_timestamp:'',updated_timestamp:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblusers(values);
                if (response) {
                    dispatch(setTblusersMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblusersMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblusers(values);
                if (response) {
                    dispatch(setTblusersMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblusersMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.number().required('survey_id is required'),
fname: yup.string().required('fname is required'),
lname: yup.string().required('lname is required'),
job_title: yup.string().required('job_title is required'),
email: yup.string().required('email is required'),
phone_number: yup.string().required('phone_number is required'),
password: yup.string().required('password is required'),
contact: yup.string().required('contact is required'),
Hire_Date: yup.string().required('Hire_Date is required'),
prn: yup.string().required('prn is required'),
address: yup.string().required('address is required'),
groups: yup.string().required('groups is required'),
city: yup.string().required('city is required'),
country: yup.string().required('country is required'),
role: yup.string().required('role is required'),
permissions: yup.string().required('permissions is required'),
is_admin: yup.string().required('is_admin is required'),
is_guest: yup.string().required('is_guest is required'),
bu: yup.string().required('bu is required'),
department: yup.string().required('department is required'),
actives: yup.string().required('actives is required'),
submitted: yup.string().required('submitted is required'),
created_timestamp: yup.string().required('created_timestamp is required'),
updated_timestamp: yup.string().required('updated_timestamp is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblusers
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblusers</span>
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
<label className="form -control-label">fname</label>
<Form.Control type="text" name="fname" className="form-control" value={formik.values.fname}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.fname && !!formik.errors.fname}
isValid ={!!formik.touched.fname && !formik.errors.fname}
></Form.Control>
{
    formik.errors.fname && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.fname}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">lname</label>
<Form.Control type="text" name="lname" className="form-control" value={formik.values.lname}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.lname && !!formik.errors.lname}
isValid ={!!formik.touched.lname && !formik.errors.lname}
></Form.Control>
{
    formik.errors.lname && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.lname}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">job_title</label>
<Form.Control type="text" name="job_title" className="form-control" value={formik.values.job_title}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.job_title && !!formik.errors.job_title}
isValid ={!!formik.touched.job_title && !formik.errors.job_title}
></Form.Control>
{
    formik.errors.job_title && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.job_title}
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
<label className="form -control-label">phone_number</label>
<Form.Control type="text" name="phone_number" className="form-control" value={formik.values.phone_number}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.phone_number && !!formik.errors.phone_number}
isValid ={!!formik.touched.phone_number && !formik.errors.phone_number}
></Form.Control>
{
    formik.errors.phone_number && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.phone_number}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">password</label>
<Form.Control type="text" name="password" className="form-control" value={formik.values.password}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.password && !!formik.errors.password}
isValid ={!!formik.touched.password && !formik.errors.password}
></Form.Control>
{
    formik.errors.password && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.password}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">contact</label>
<Form.Control type="text" name="contact" className="form-control" value={formik.values.contact}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.contact && !!formik.errors.contact}
isValid ={!!formik.touched.contact && !formik.errors.contact}
></Form.Control>
{
    formik.errors.contact && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.contact}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">Hire_Date</label>
<Form.Control type="text" name="Hire_Date" className="form-control" value={formik.values.Hire_Date}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.Hire_Date && !!formik.errors.Hire_Date}
isValid ={!!formik.touched.Hire_Date && !formik.errors.Hire_Date}
></Form.Control>
{
    formik.errors.Hire_Date && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.Hire_Date}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">prn</label>
<Form.Control type="text" name="prn" className="form-control" value={formik.values.prn}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.prn && !!formik.errors.prn}
isValid ={!!formik.touched.prn && !formik.errors.prn}
></Form.Control>
{
    formik.errors.prn && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.prn}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">address</label>
<Form.Control type="text" name="address" className="form-control" value={formik.values.address}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.address && !!formik.errors.address}
isValid ={!!formik.touched.address && !formik.errors.address}
></Form.Control>
{
    formik.errors.address && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.address}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">groups</label>
<Form.Control type="text" name="groups" className="form-control" value={formik.values.groups}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.groups && !!formik.errors.groups}
isValid ={!!formik.touched.groups && !formik.errors.groups}
></Form.Control>
{
    formik.errors.groups && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.groups}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">city</label>
<Form.Control type="text" name="city" className="form-control" value={formik.values.city}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.city && !!formik.errors.city}
isValid ={!!formik.touched.city && !formik.errors.city}
></Form.Control>
{
    formik.errors.city && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.city}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">country</label>
<Form.Control type="text" name="country" className="form-control" value={formik.values.country}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.country && !!formik.errors.country}
isValid ={!!formik.touched.country && !formik.errors.country}
></Form.Control>
{
    formik.errors.country && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.country}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">role</label>
<Form.Control type="text" name="role" className="form-control" value={formik.values.role}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.role && !!formik.errors.role}
isValid ={!!formik.touched.role && !formik.errors.role}
></Form.Control>
{
    formik.errors.role && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.role}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">permissions</label>
<Form.Control type="text" name="permissions" className="form-control" value={formik.values.permissions}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.permissions && !!formik.errors.permissions}
isValid ={!!formik.touched.permissions && !formik.errors.permissions}
></Form.Control>
{
    formik.errors.permissions && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.permissions}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">is_admin</label>
<Form.Control type="text" name="is_admin" className="form-control" value={formik.values.is_admin}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.is_admin && !!formik.errors.is_admin}
isValid ={!!formik.touched.is_admin && !formik.errors.is_admin}
></Form.Control>
{
    formik.errors.is_admin && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.is_admin}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">is_guest</label>
<Form.Control type="text" name="is_guest" className="form-control" value={formik.values.is_guest}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.is_guest && !!formik.errors.is_guest}
isValid ={!!formik.touched.is_guest && !formik.errors.is_guest}
></Form.Control>
{
    formik.errors.is_guest && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.is_guest}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">bu</label>
<Form.Control type="text" name="bu" className="form-control" value={formik.values.bu}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.bu && !!formik.errors.bu}
isValid ={!!formik.touched.bu && !formik.errors.bu}
></Form.Control>
{
    formik.errors.bu && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.bu}
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
<label className="form -control-label">actives</label>
<Form.Control type="text" name="actives" className="form-control" value={formik.values.actives}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.actives && !!formik.errors.actives}
isValid ={!!formik.touched.actives && !formik.errors.actives}
></Form.Control>
{
    formik.errors.actives && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.actives}
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

