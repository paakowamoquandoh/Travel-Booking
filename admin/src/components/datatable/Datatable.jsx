import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState()
  const baseURL = 'http://localhost:8800/api';
  const { data, loading, error } = useFetch(`${baseURL}/${path}`);

  useEffect(() => {
      setList(data)
  }, [data])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/${path}/${id}`, {withCredentials:true});    
      setList(list.filter((item)=>item._id !== id));  
    } catch (error) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span className="capitalise">{path}</span>
        <Link to={`/${path}/new`} className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />
    </div>
  );
};

export default Datatable;
