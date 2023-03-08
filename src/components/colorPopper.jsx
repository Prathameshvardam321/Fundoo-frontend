import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { DashboardContext } from '../pages/Dashboard/page1';
import { DashboardContext1 } from '../pages/Dashboard/page1';
import { updateColor } from '../Services/dataservice';
import { deleteNotes } from '../Services/dataservice';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { updateTrash } from '../Services/dataservice';
import { updateArchieve } from '../Services/dataservice';
import { DashboardContext2 } from '../pages/Dashboard/page1';
export default function ColorPopper({ action, listenToColorPopper, note ,title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const refresh = React.useContext(DashboardContext)
  const refresh1 = React.useContext(DashboardContext1)
  const refresh2 = React.useContext(DashboardContext2)
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const Colours = ['red', 'lightblue','lightgreen', 'lightyellow', 'whitesmoke']
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const selectColor = async (color) => {
    if (action === 'create') {
      listenToColorPopper(color)
      note['Colour'] = color
      console.log(note);
      refresh()
    } else {
      note['Colour'] = color
      let reponse = await updateColor(note, note._id)
      refresh()
    }
  }
  const changeArchieve = async ()=>{
    await updateArchieve(note,note._id) 
    console.log(title);
    if(title=='Notes'){
      refresh()
    }
   else{
     refresh1()
    }
   
    console.log(note);
  }
  async function trashCall(state) {
    console.log(title);
    console.log(state);
    await updateTrash(note, note._id)
   
    if(title=='Notes'){
      refresh()
    }
   else{
     refresh2()
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
   <ColorLensOutlinedIcon aria-describedby={id} type="button" onClick={handleClick} />
      <ArchiveOutlinedIcon onClick={changeArchieve}/> <DeleteIcon onClick={trashCall} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
          {Colours.map((color) => (
            <div onClick={() => selectColor(color)} style={{ backgroundColor: color, borderRadius: 50, width: 20, height: 20, margin: 4 }}> </div>
          ))}
        </Box>
      </Popper>
    </div>
  );
}

