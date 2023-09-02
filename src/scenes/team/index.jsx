import { Box, Typography, useTheme, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';

import * as React from 'react';
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';
import './index.css'

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, where, query } from "firebase/firestore";
import { db } from '../../firebase';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let list = []
      try{
        const q = query(
          collection(db, "users"), 
          where("role", "==", "Team")
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          list.push({ id:doc.id, ...doc.data()});
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setData(list);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[]);

  const handleDelete = async (email) => {
     //use window confirm to consider Admin to delete the article or not.
     if(window.confirm("Are you sure you want to delete this User?")) {
      try {
        await deleteDoc(doc(db, "users", email));
        setData(data.filter((item) => item.email !== email));
      } catch(error) {
        console.log(error);
      }
     };
  };

  const columns = [
    {
      field: 'user',
      headerName: 'Members',
      width: 230,
      editable: true,
      renderCell: (params) => {
        return(
          <div className="cellRender">
            <img src={params.row.img} alt="avatar" className="cellImg" />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'departement',
      headerName: 'Departement',
      width: 120,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: 130,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 210,
    },
    {
      field: 'task',
      headerName: 'Current Task',
      width: 210,
      sortable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      renderCell: ({ row: { status }}) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            color={
              status === "active" ? colors.greenAccent[300] 
              : status === "pending" ? colors.blueAccent[300]
              : colors.redAccent[300]
            }
            backgroundColor={
              status === "active" ? colors.greenAccent[800] 
              : status === "pending" ? colors.blueAccent[800]
              : colors.redAccent[800]
            }
            borderRadius="4px"
          >
            <Typography>
              {status}
            </Typography>
          </Box>
        )
      }
    },
  ];

  return (
    <>
    <main className="content">
      <Topbar/>
      <Box m="20px">
      <Header title="TEAMS" subtitle="View your Workplace teams here and they current task" button="Add User" link="/team/newTeam"/>

      {/*DATA TABLE */}
      <Box m="20px 0 0 0" height="75vh" sx={{  width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
    </main>
    </>
  )
}

export default Team;