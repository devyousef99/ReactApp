import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { setTblusersList, setTblusersMessage } from "redux/actions";
import { RootState } from "redux/reducers";
import { useAppDispatch } from "redux/store";
import { getTblusers } from "services/tblusersService";
import Layout from "template";
import { Constant } from "template/Constant";
import { TblusersForm } from "./form";
import { TblusersTable } from "./table";

export const Tblusers: React.FC = () => {
  const dispatch = useAppDispatch();
  const rData = useSelector((state: RootState) => state.tblusers);
  const [row, setRow] = useState(undefined);
  const [action, setAction] = useState('');
  const getData = (page, pageSize, searchKey) => {
    getTblusers(page, pageSize, searchKey).then((response) => {
      if (response && response.records) {
        dispatch(setTblusersList({ pageNo: page, pageSize: pageSize, list: response.records, totalCount: response.total_count, searchKey: searchKey }));
      } else {
        dispatch(setTblusersMessage("No Record Found"));
      }
    })
  }

  const handleRowEdit = (rowData) => {
    setRow(rowData);
    dispatch(setTblusersMessage(''));
    setAction('edit');
  }
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Users</h1>
        </div>
        <div className="d-flex flex-column min-vh-100">
          {rData.message ?
            <Alert variant={Constant.defaultAlertVarient} className="alert-dismissible fade">{rData.message}
              <Button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => dispatch(setTblusersMessage(''))}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </Alert> : null}
          {action ? <TblusersForm hideShowForm={setAction} action={action} row={row} getData={getData} /> :
            <TblusersTable handleRowEdit={handleRowEdit} hideShowForm={setAction} getData={getData} />}
        </div>

      </div>
    </Layout >
  );
};

