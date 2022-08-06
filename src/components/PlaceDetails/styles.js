import {makeStyles} from '@material-ui/core/styles';
import { Subtitles } from '@material-ui/icons';

export default makeStyles(() => ({
   chip: {
      margin: '5px 5px 5px 0',
   },

   subtitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'spece-between',
      marginTop: '10px',
   },

   spacing: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   }
}));