import { Box, Typography, useTheme, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import * as React from 'react';
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';
import './index.css'

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'user',
      headerName: 'Members',
      width: 230,
      editable: true,
      renderCell: (params) => {
        return(
          <div className="cellRender">
            <img src={params.row.img} alt="avatar" className="cellImg" />
            {params.row.name}
          </div>
        )
      }
    },
    {
      field: 'team',
      headerName: 'Team',
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
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 220,
      renderCell: () => {
        return(
          <div className="cellRender">
            <Button 
              variant="outlined"
              style={{
                color: colors.grey[100],
                border: `1px solid ${colors.grey[100]}`
              }}
              startIcon ={<RemoveRedEyeOutlinedIcon/>}
            >
              View
            </Button>

            <Button 
              variant="outlined"
              style={{
                color: colors.redAccent[500],
                border: `1px solid ${colors.redAccent[500]}`,
                margin: '0 0 0 15px'
              }}
              startIcon ={<DeleteOutlinedIcon />}
            >
              Delete
            </Button>
          </div>
        )
      }
    },
  ];

  return (
    <>
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Box m="20px">
      <Header title="TEAMS" subtitle="View your Workplace teams here and they current task" button="New User" link="/team/newTeam"/>

      {/*DATA TABLE */}
      <Box m="20px 0 0 0" height="75vh" sx={{  width: '100%' }}>
        <DataGrid
          rows={mockDataTeam}
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