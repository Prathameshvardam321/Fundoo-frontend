// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import '../components/drawer.css'
// import ArchiveIcon from '@mui/icons-material/Archive';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { connect } from 'react-redux';
// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// function MiniDrawer(props) {
//   const theme = useTheme();
//   const { open, listenToDrawer } = props
//   console.log(props);
//   return (
//     <Box sx={{ display: 'flex' }}>


//       <Drawer variant="permanent" open={open}>

//         <List>

//           <ListItem onClick={() => {
//             listenToDrawer('Notes');
//             props.dispatch({ type: 'Notes' })
//           }} key={'Notes'} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//                 marginTop: '10px'
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',
//                   marginTop: '25px'
//                 }}
//               >
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>
//           <ListItem onClick={() => {
//             listenToDrawer('Archive');
//             props.dispatch({ type: 'Archive' })
//           }} key={'Archive'} disablePadding sx={{ display: 'block' }}  >
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',

//                 }}

//               >
//                 <ArchiveIcon />
//               </ListItemIcon>
//               <ListItemText primary={'Archive'} sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>
//           <ListItem onClick={() => {
//             listenToDrawer('Trash');
//             props.dispatch({ type: 'Trash' })

//           }} key={'Trash'} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <DeleteIcon onClick={() => listenToDrawer('Trash')} key={'Trash'} />
//               </ListItemIcon>
//               <ListItemText primary={'Trash'} sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>



//         </List>

//       </Drawer>

//     </Box>
//   );
// }

// export default connect()(MiniDrawer)

//new
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '../components/drawer.css'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function MiniDrawer(props) {
  const theme = useTheme();
const {open,listenToDrawer} = props
console.log(props);
  return (
    <Box sx={{ display: 'flex' }}>
   
     
       <Drawer variant="permanent" open={open}>
        
        <List>
            
          <ListItem   onClick={()=>{listenToDrawer('Notes');
          props.dispatch({type:'Notes'})
            }}
             key={'Notes'} disablePadding sx={{ display: 'block' }}> 
              <ListItemButton

                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginTop:2
                  }}
                >
                   <InboxIcon  onClick={()=>{listenToDrawer('Notes');
          props.dispatch({type:'Notes'})
            }} /> 
                </ListItemIcon>
                <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={()=>{listenToDrawer('Archive');
             props.dispatch({type:'Archive'})
            }} key={'Archive'} disablePadding sx={{ display: 'block' }}  > 
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginTop:'15px'
                  }}
                
                >
                   <ArchiveIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Archive'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={()=>{listenToDrawer('Trash');
             props.dispatch({type:'Trash'})
            
            }} key={'Trash'} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginTop:'15px'
                  }}
                >
                   <DeleteIcon onClick={()=>listenToDrawer('Trash')} key={'Trash'} /> 
                </ListItemIcon>
                <ListItemText primary={'Trash'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
      </List>
       </Drawer>
      
    </Box>
  );
}

export default connect()(MiniDrawer)