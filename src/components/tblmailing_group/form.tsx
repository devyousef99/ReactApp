import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { setTblmailing_GroupMessage } from "redux/actions";


import { useAppDispatch } from "redux/store";
import { addTblmailing_Group, updateTblmailing_Group } from "services/tblmailing_groupService";
import { Constant } from "template/Constant";
import * as yup from 'yup';
type Props = {
    row?: any,
    hideShowForm: (actionName) => void;
    getData: (page, pageSize, searchKey) => void;
    action?: string
};
export const Tblmailing_GroupForm: React.FC<Props> = ({ row, hideShowForm, getData, action }) => {
    const dispatch = useAppDispatch();
    const iValue={id:'',survey_id:'',name:'',email:'',created_by:'',created_at:''};
    const initialValue = action === 'edit' ? row : iValue;
    
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            if (action === 'edit') {
                const response = await updateTblmailing_Group(values);
                if (response) {
                    dispatch(setTblmailing_GroupMessage("Updated Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblmailing_GroupMessage("Some error occured!"));
                }
            } else if (action === 'add') {
                const response = await addTblmailing_Group(values);
                if (response) {
                    dispatch(setTblmailing_GroupMessage("Added Successfully"));
                    getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                    hideShowForm('');
                } else {
                    dispatch(setTblmailing_GroupMessage("Some error occured!"));
                }
            }
        },
        validationSchema: yup.object({
           survey_id: yup.number().required('survey_id is required'),
name: yup.string().required('name is required'),
email: yup.string().required('email is required'),
created_by: yup.string().required('created_by is required'),
created_at: yup.string().required('created_at is required'),

        }),
    });
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary text-capitalize">{action} Tblmailing_Group
                    <Button className="btn-icon-split float-right" onClick={() => hideShowForm(false)}>
                        <span className="icon text-white-50">
                            <i className="fas fa-list"></i>
                        </span>
                        <span className="text">View Tblmailing_Group</span>
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
<label className="form -control-label">created_by</label>
<Form.Control type="text" name="created_by" className="form-control" value={formik.values.created_by}
onChange={formik.handleChange}
onBlur ={formik.handleBlur}
isInvalid ={!!formik.touched.created_by && !!formik.errors.created_by}
isValid ={!!formik.touched.created_by && !formik.errors.created_by}
></Form.Control>
{
    formik.errors.created_by && (
    <Form.Control.Feedback type="invalid">
        {formik.errors.created_by}
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

