import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { useAppDispatch } from "redux/store";
import { resetTblsurveysToInit, setTblsurveysMessage } from "redux/actions";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Constant } from "template/Constant";
import ConfirmationModal from "template/ConfirmationModal";
import { deleteTblsurveys } from "services/tblsurveysService";
type Props = {
    hideShowForm: (action) => void;
    handleRowEdit: (row) => void;
    getData: (page, pageSize, searchKey) => void;
};
export const TblsurveysTable: React.FC<Props> = ({ hideShowForm, handleRowEdit, getData }) => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const [rowData, setRowData] = useState(undefined);
    const rData = useSelector((state: RootState) => state.tblsurveys);
    const handleSearch = () => {
        if (search.length > 0) {
            getData(Constant.defaultPageNumber, Constant.defaultPageSize, search);
        }
    }
    const handlePerRowsChange = async (newPerPage, page) => {
        await getData(page, newPerPage, '');
    }
    const handlePageChange = (page) => {
        getData(page, rData.pageSize, '');
    };
    const handleRowDeleteClick = (row) => {
        setRowData(row);
        setShowDelete(true);
    }
    useEffect(() => {
        if (rData && rData.list && rData.list.length === 0) {
            dispatch(resetTblsurveysToInit());
            getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
        }
    },[rData.list.length])
    const handleReset = () => {
        setSearch('');
        dispatch(resetTblsurveysToInit());
        getData(Constant.defaultPageNumber, rData.pageSize, '');
    }
    const handleServerDelete = async () => {
        if (rowData) {
            const response = await deleteTblsurveys(rowData.id);
            if (response) {
                dispatch(resetTblsurveysToInit());
                dispatch(setTblsurveysMessage("Deleted Successfully"));
                getData(Constant.defaultPageNumber, Constant.defaultPageSize, '');
                setShowDelete(false);
            } else {
                dispatch(setTblsurveysMessage("Some error occured!"));
            }
        }
    }

    const handleRowSelection = (row) => {
        console.log(row); // Row Selection Functionality can be written here
    }
    const handleAddButtonClick = () => {
        dispatch(setTblsurveysMessage(''));
        hideShowForm('add');
    }

    const columns = [
       {name: 'id', selector: row => row.id, sortable: true},
{name: 'name', selector: row => row.name, sortable: true},
{name: 'name_ar', selector: row => row.name_ar, sortable: true},
{name: 'type', selector: row => row.type, sortable: true},
{name: 'email', selector: row => row.email, sortable: true},
{name: 'views', selector: row => row.views, sortable: true},
{name: 'start_date', selector: row => row.start_date, sortable: true},
{name: 'end_date', selector: row => row.end_date, sortable: true},
{name: 'status', selector: row => row.status, sortable: true},
{name: 'JSON', selector: row => row.JSON, sortable: true},
{name: 'save_draft', selector: row => row.save_draft, sortable: true},
{name: 'created_at', selector: row => row.created_at, sortable: true},

        ,{
            name: '',
            button: true,
            cell: (row) => <Button variant="link" className="btn-sm" onClick={() => handleRowEdit(row)}>Edit</Button>,
        },
        {
            name: '',
            button: true,
            cell: (row) => <Button variant="link" className="btn-sm" onClick={() => handleRowDeleteClick(row)}>Delete</Button>,
        },
    ];
    return (
        <Card className="shadow mb-4">
            <Card.Header className="py-3">
                <h6 className="m-0 font-weight-bold text-primary">Tblsurveys List ({rData.totalCount})
                    <Button variant="light" className="btn-circle btn-sm ml-2" onClick={handleReset}><i className="fa fa-refresh"></i></Button>
                    <Button className="btn-icon-split float-right" onClick={handleAddButtonClick}>
                        <span className="icon text-white-50">
                            <i className="fas fa-add"></i>
                        </span>
                        <span className="text">Add New</span>
                    </Button></h6>

            </Card.Header>
            <Card.Body>
                <Col className="ml-auto" md={3} xs={12} xl={3}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button disabled={search.length <= 2} variant="dark" className="rounded-0 rounded-right" id="button-search" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <div className="table-responsive">
                    <DataTable
                        selectableRows={true}
                        onSelectedRowsChange={handleRowSelection}
                        paginationPerPage={Constant.defaultPageNumber}
                        paginationRowsPerPageOptions={Constant.paginationRowsPerPageOptions}
                        columns={columns} data={rData.list}
                        onChangeRowsPerPage={handlePerRowsChange}
                        paginationTotalRows={rData.totalCount}
                        className="table table-bordered"
                        pagination
                        paginationServer
                        onChangePage={handlePageChange}></DataTable>
                </div>
            </Card.Body>
            <ConfirmationModal buttonNegative="Cancel" buttonPositive="Delete" title="Delete Confirmation" show={showDelete} body={"Are you sure?"} onNegative={() => setShowDelete(false)} onPositive={handleServerDelete} />
        </Card>
    );
}

