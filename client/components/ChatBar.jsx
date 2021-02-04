import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';

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
export default function ChatBar( {userInput, inputReset} ) {
  const classes = useStyles();

    function handleSubmit(e) {
      e.preventDefault();
      e.target.reset();
      inputReset();
      console.log('The text was submitted.');
    }

    function handleChange(e) {
      e.preventDefault();
      let phrase = e.target.value;
      let letter = phrase.slice(phrase.lenght - 1, phrase.length)
      userInput(letter);
    }

  return (
    <div className={classes.root}>
      <div>
        <form id="mainTextField" onSubmit={handleSubmit}>
          <TextField
            id="outlined-full-width"
            label="Communicate"
            style={{ margin: 13 }}
            placeholder="your message to Mephisto..."
            helperText="Choose your words...wisely."
            fullWidth
            margin="normal"

            onChange={handleChange}

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
        </form>
      </div>
    </div>
  );
}