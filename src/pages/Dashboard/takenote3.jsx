import MenuIcon from '@mui/icons-material/Menu';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { CardActions, IconButton, styled, TextField } from '@mui/material';

import { getNotes } from '../../Services/dataservice';
import './pag1.css'
import { useContext, useEffect, useState } from 'react';
import ColorPopper from '../../components/colorPopper';
import React from "react";
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteNotes } from '../../Services/dataservice';
import { DashboardContext } from './page1';
import { updateTrash } from '../../Services/dataservice';
import { updateColor } from '../../Services/dataservice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
function Takenote3(props) {
  const [state, setState] = useState(0)
  const [open, setOpen] = React.useState(false);
  const [editNoteObj,setEditNoteObj] = React.useState({})
  const refresh = React.useContext(DashboardContext)
  const handleOpen = (note) => {
    setEditNoteObj({...note})
    setOpen(true);
  }
  const takeTitle = (event) => {
    setState(state + 1)
    setEditNoteObj((prevState) => ({
      ...prevState, Title: event.target.value
    }))
  }
  const takeDescription = (event) => {
    setState(state + 1)
    setEditNoteObj((prevState) => ({
      ...prevState, Description: event.target.value
    }))
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);
  const listenToColorPopper = (color) => {
    console.log(color);
  }

  async function deleteCall() {
    await deleteNotes(props.note._id)
    refresh()
    setState(state + 1)

  }
  const shift2to1 = async () => {

    let resonse = await updateColor(editNoteObj,editNoteObj._id)
    refresh()
    console.log(resonse);
  }

 
  return (
    <>
      <Card style={{ border: '1px solid grey', padding: '1px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: props.note.Colour }}>
      <CardContent onClick={()=>handleOpen(props.note)}>
        <Typography variant='body3' >
          {props.Title}
        </Typography>
        <br />
        {props.Description}
        <br />
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: '65px', paddingTop: '10px' }}>
          <ColorPopper action={'edit'}  title={props.title} note={props.note} listenToColorPopper={listenToColorPopper} fontSize="small" />
          <MoreVertIcon  onClick={() => deleteCall()}  />
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField onChange={takeTitle} value={editNoteObj.Title}> </TextField>
          <TextField onChange={takeDescription} value={editNoteObj.Description}> </TextField>
          <br></br>
           <button onClick={shift2to1} style={{marginLeft:'350px'}}>close</button>
        </Box>
      </Modal>
    </>
  )
}

export default Takenote3