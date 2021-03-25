import { makeStyles } from '@material-ui/core/styles';

import Icono from '../../../assets/imgs/escudo_icono.png'


const useStyles = makeStyles((theme) => ({
    media: {
        maxWidth: 80,
      marginRight: theme.spacing(3),
    },
    
  }));
export default function Img_header(){
    const classes = useStyles();
    return(
        <div >
        
        <img src={Icono} className={classes.media} alt="escudo"/>
      </div>
      
      )
}