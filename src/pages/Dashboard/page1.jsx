import React, { useEffect,useReducer } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import { CardActions, IconButton, styled, TextField } from '@mui/material';
import SearchAppBar from '../Dashboard/p1'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { getNotes } from '../../Services/dataservice';
import SearchIcon from '@mui/icons-material/Search';
import ColorPopper from '../../components/colorPopper';
import './pag1.css'
import { useState } from 'react';
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { postNotes } from '../../Services/dataservice';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { ClickAwayListener } from '@mui/material';
import { Grid } from '@mui/material'
import Takenote3 from './takenote3';
import Card from '@mui/material/Card';
import { updateArchieve } from '../../Services/dataservice';
import NavDrawer from '../../components/drawer';
import {  connect } from 'react-redux';
import img from '../../asset/Google_Keep_icon.png'

export const DashboardContext = React.createContext()
export const DashboardContext1 = React.createContext()
export const DashboardContext2 = React.createContext()

const initialState = {
  setNotes: [], option: ''
}

  const reducer1 = (state, action) => {
  switch (action.type) {
    case 'Notes':
      return {
        ...state,
        setNotes: action.payload
      }
    case 'Trash':
      return {
        ...state,
        setNotes: action.payload
      }
    case 'Archive':
      return {
        ...state,
        setNotes: action.payload
      }

    default:
      console.log("Not gone");
      break;
  }
}


function Page1({title}) {
  const [state, dispatch] = useReducer(reducer1, initialState)
  const [notes, setNotes] = useState([])
  const [isNoteFocused, setIsNoteFocused] = useState(false);
  const [takeNote, setTakeNote] = useState(true)
  const [note, setNote] = useState({ Title: "", Description: "" })
  const [color, setColor] = useState('')
  const [createNote, SetCreateNote] = useState(0)
  const [displayNav, setDisplayNav] = useState(false)
  const [drawer, setDrawer] = React.useState(false)
  const takeTitle = (event) => {
    setNote((prevState) => ({
      ...prevState, Title: event.target.value
    }))
  }


  const takeDescription = (event) => {
    setNote((prevState) => ({
      ...prevState, Description: event.target.value
    }))
  }

  const listenToDrawer = (option) => {
    console.log(option)
    if(option === 'Notes') {
      fetch('Notes')
    }
    else if  (option === 'Archive') {
      fetch('Archive')
    } else if (option === 'Trash') {
      fetch('Trash')  
    }
  }

  const listenToColorPopper = (color) => {
    setColor(color)
  }
 

  const shift2to1 = async () => {
    let resonse = await postNotes(note)
    SetCreateNote(createNote + 1)
    fetch('Notes')
    console.log(resonse);
  }

  const fetch = async (option) => {
    let arrayOfAllNotes = await getNotes();
    const arrayOfAllNotes1 = arrayOfAllNotes.data.data.filter((noteObj) => noteObj.Archieve === false && noteObj.Trash === false)
    const archiveNotes = arrayOfAllNotes.data.data.filter((noteObj) => noteObj.Archieve === true)
    const trashedNotes = arrayOfAllNotes.data.data.filter((noteObj) => noteObj.Trash === true)
    if(option === 'Notes') {

      dispatch({type:'Notes',payload :arrayOfAllNotes1})
    }
    else if  (option === 'Archive') {
      
    dispatch({ type: 'Archive', payload: archiveNotes })

    } else if (option === 'Trash') {
      dispatch({ type: 'Trash', payload: trashedNotes })
    }

  };


  const changeArchieve = async ()=>{
    await updateArchieve(note,note._id) 
    console.log(note);
  }

  useEffect(() => {
    fetch('Notes')
  }, [])

  const onTextAraClick = () => {
    setIsNoteFocused(true)
    setTakeNote(false)
  }
  const handClickAway = () => {
    setColor('')
    setIsNoteFocused(false)
    setTakeNote(true)
    SetCreateNote(createNote + 1)
  }

  const listenToHeader = () => {
    setDrawer(!drawer)
  }


  return (
    <>
      <DashboardContext.Provider value={()=>fetch('Notes')}>
      <DashboardContext1.Provider value={()=>fetch('Archive')}>
      <DashboardContext2.Provider value={()=>fetch('Trash')}>
        <div className='main'>
          <header className='keep-h1' >
            <MenuIcon className='menu' onClick={() => {
              listenToHeader()
              setDisplayNav(!displayNav)
            }} />
            <img className='bulb' src={img} height={'40px'}/>

            <div className='k-name'> {title}  </div>
          
        <div className='searchbar'>
             <SearchIcon />   
             <div style={{marginLeft:'255px'}}>
              Search . . .
             </div>
            </div>

            <div className='iconRight'>
              <RefreshIcon />
              <ViewStreamIcon />
              <SettingsIcon />
            </div>
            <div className='iconCornerright'>
              <AppsIcon /> <AccountCircleIcon />
            </div>

          </header>
          
          <ClickAwayListener onClickAway={()=>handClickAway()}>
          
            <div className='notesParent' style={{ backgroundColor: color  }}>
            
              {takeNote &&
                <div onClick={onTextAraClick} className='notes'>
                  Take a Note ...
                  <div className='notesRgt'>
                    <PlaylistAddCheckOutlinedIcon /> <BrushOutlinedIcon /> <ImageOutlinedIcon />
                  </div>
                </div>
                
              }
              <NavDrawer  open= {drawer}  listenToDrawer = {listenToDrawer}  />
              {isNoteFocused &&
                <TextField className='notes1'
                  style={{ backgroundColor: color }}
                  onChange={takeTitle}
                  placeholder='Title ...'
                  multiline
                  maxRows={Infinity}
                  variant="standard"
                />}{
                isNoteFocused &&
                <TextField className='notes1'
                  style={{ backgroundColor: color }}
                  onChange={takeDescription}
                  placeholder='Description ...'
                  multiline
                  maxRows={Infinity}
                  variant="standard"
                />
              }
              {
                isNoteFocused &&
                <div  className='notesIconBottom' style={{display:'flex', backgroundColor: color ,justifyContent:'space-between',width:'580px' }}>
                  <AddAlertRoundedIcon /> <PersonAddAlt1OutlinedIcon />  <ColorPopper action={'create'} note={note} color={color} title={title}  listenToColorPopper={listenToColorPopper} /> <ImageOutlinedIcon />  <ArchiveOutlinedIcon title={title} onClick={changeArchieve} /> <MoreVertIcon /> <UndoIcon /> <RedoIcon /> <button style={{marginLeft:'auto'}} onClick={()=>shift2to1()}>close</button>
                </div>
              }
            </div>
          </ClickAwayListener>
      
        </div>
        <Grid container columnGap={6} style={{ paddingLeft: '19vw'}} >
          {state.setNotes.map((note) => <Card sx={{ maxWidth: '185px' }} variant='box2' items lg={16} md={14} sm={12} style={{ margin: '4px', borderRadius: '5px' }} >
            < Takenote3 note={note} title={title}
              Title={note.Title} Description={note.Description}
            />
          </Card>
          )
          }
        </Grid>
        </DashboardContext2.Provider>
        </DashboardContext1.Provider>
      </DashboardContext.Provider>
    </>
  )
}
const mapStateToProps =(state) => { return {title : state.navReducer.title} }
export default connect(mapStateToProps)(Page1)



