import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//style definitions for component________________
const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 100
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    color: 'white',
    fontFamily: 'Orbitron'
  },
  label: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white',
    fontFamily: 'Orbitron'
  },
  helper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white',
    fontFamily: 'Orbitron'
  }
}));

//component anatomy_________________________________
export default function ChatBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Communicate"
          style={{ margin: 13 }}
          placeholder="your message to Mephisto..."
          helperText="Choose your words...wisely."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            className: classes.label
          }}
          InputProps={{
            className: classes.textField
          }}
          FormHelperTextProps={{
            className: classes.helper
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}