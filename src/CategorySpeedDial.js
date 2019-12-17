import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import NavigationIcon from '@material-ui/icons/Navigation';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';


const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'fixed',
    bottom:0,
    right:0,
  },
}));

export default function CategorySpeedDial(props) {
    const {actions,...others}=props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };
    
    const handleClick=(action)=>{
        var x=document.getElementById(action.id).offsetTop
        x=x-50        //nav bar offset
        window.scrollTo({left:0, top:x, behavior:'smooth'}) 
    }
    return (
      <React.Fragment>
        <Backdrop open={open} />
        <div className={classes.root}>
            <SpeedDial
              ariaLabel="SpeedDial openIcon example"
              className={classes.speedDial}
              icon={<SpeedDialIcon icon={<NavigationIcon/>}/>}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
            {actions.map(action => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={()=>{handleClick(action)}}
                    tooltipOpen
                />
            ))}
            </SpeedDial>
        </div>
      </React.Fragment>
    );
}