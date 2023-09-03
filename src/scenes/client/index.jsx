import { Box, Button, Card, CardActions, CardContent, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import {React, useState, useEffect} from 'react'
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';
import { useAuthState} from 'react-firebase-hooks/auth';
import { collection, getDocs, deleteDoc, doc, where, query } from "firebase/firestore";
import { db, auth } from '../../firebase';

const Client = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let list = [];
      try{
        const q = query(
          collection(db, "users"), 
          where("role", "==", "Client")
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

  return (
<>
  <main className="content">
    <Topbar/>
    <Box m="20px">
      <Header title="CLIENTS" subtitle="View and Manage Clients" button="ADD CLIENT" link="/client/newClient"/>
    </Box>

    <Box style={{
      display: "flex",
    }}>
      {data.map(({id, img, username, company, position}) => (
      <Card 
      id={id}
      color='white' 
      style={{ 
        maxWidth: 175,
        borderRadius: "5px",
        backgroundColor: colors.blueAccent[900],
        padding: "10px",
        margin: "10px"
      }}>
        <CardContent style={{textAlign: "center"}}>
          <Box
            alt="profile-user"
            className="sidebar-box"
            width="75px"
            height="75px"
            style={{
              cursor: "pointer", 
              borderRadius: "50%",
              backgroundImage: `url(${img})`,
              margin: "10px auto",
              backgroundSize: 'cover',
            }}
          />
          <Typography style={{ mb: 1.5}} color="text.secondary">
            {username}
          </Typography>
          <Typography >
            {position} at <span className='cellCompany'>{company}</span>
          </Typography>
        </CardContent>

      <CardActions>
        <Button variant="contained">Message</Button>
        <Button variant="contained">View </Button>
      </CardActions>
    </Card>
    ))}
  </Box>
  </main>
</>
  )
}

export default Client;