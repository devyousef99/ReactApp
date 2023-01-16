import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblsurveysMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblsurveys, updateTblsurveys } from "services/tblsurveysService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const TblsurveysForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',name:'',name_ar:'',type:'',email:'',views:'',start_date:'',end_date:'',status:'',JSON:'',save_draft:'',created_at:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblsurveys(values);
                if (response) {
                    dispatch(setTblsurveysMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblsurveysMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblsurveys(values);
                if (response) {
                    dispatch(setTblsurveysMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblsurveysMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           name: yup.string().required('name is required'),
name_ar: yup.string().required('name_ar is required'),
type: yup.string().required('type is required'),
email: yup.string().required('email is required'),
views: yup.number().required('views is required'),
start_date: yup.string().required('start_date is required'),
end_date: yup.string().required('end_date is required'),
status: yup.string().required('status is required'),
JSON: yup.string().required('JSON is required'),
save_draft: yup.string().required('save_draft is required'),
created_at: yup.number().required('created_at is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblsurveys
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblsurveys</span>
                    </Button>
                </h6>

            </Card.Header>
            <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
<label className="form -control-label">name</label>
<Form.Control type="text" name="name" className="form-control" value={formik.values.name}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.name && !!formik.errors.name}
isValid ={!!formik.touched.name && !formik.errors.name}
></Form.Control>
{
    formik.errors.name && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.name}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">name_ar</label>
<Form.Control type="text" name="name_ar" className="form-control" value={formik.values.name_ar}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.name_ar && !!formik.errors.name_ar}
isValid ={!!formik.touched.name_ar && !formik.errors.name_ar}
></Form.Control>
{
    formik.errors.name_ar && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.name_ar}
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
<label className="form -control-label">views</label>
<Form.Control type="text" name="views" className="form-control" value={formik.values.views}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.views && !!formik.errors.views}
isValid ={!!formik.touched.views && !formik.errors.views}
></Form.Control>
{
    formik.errors.views && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.views}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">start_date</label>
<Form.Control type="text" name="start_date" className="form-control" value={formik.values.start_date}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.start_date && !!formik.errors.start_date}
isValid ={!!formik.touched.start_date && !formik.errors.start_date}
></Form.Control>
{
    formik.errors.start_date && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.start_date}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">end_date</label>
<Form.Control type="text" name="end_date" className="form-control" value={formik.values.end_date}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.end_date && !!formik.errors.end_date}
isValid ={!!formik.touched.end_date && !formik.errors.end_date}
></Form.Control>
{
    formik.errors.end_date && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.end_date}
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
<label className="form -control-label">JSON</label>
<Form.Control type="text" name="JSON" className="form-control" value={formik.values.JSON}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.JSON && !!formik.errors.JSON}
isValid ={!!formik.touched.JSON && !formik.errors.JSON}
></Form.Control>
{
    formik.errors.JSON && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.JSON}
    </Form.Control.Feedback>
)}
</Form.Group>
<Form.Group>
<label className="form -control-label">save_draft</label>
<Form.Control type="text" name="save_draft" className="form-control" value={formik.values.save_draft}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.save_draft && !!formik.errors.save_draft}
isValid ={!!formik.touched.save_draft && !formik.errors.save_draft}
></Form.Control>
{
    formik.errors.save_draft && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.save_draft}
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

