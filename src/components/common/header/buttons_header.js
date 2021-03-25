import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  MenuButton: {
      marginRight: theme.spacing(3),
    },
    
  }));
  export default function Buttons_header (){
    const classes = useStyles();
    return(

    <div >
         <Button variant="contained"color="secondary" className={classes.MenuButton}> * </Button>
         <Button variant="contained" color="secondary" className={classes.MenuButton}> *  </Button>
    </div>
    )
}
