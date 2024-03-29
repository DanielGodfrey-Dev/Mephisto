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
export default function ChatBar( {text, userInput, inputReset, userInputSubmit} ) {
  const classes = useStyles();

    function handleSubmit(e) {
      e.preventDefault();
      userInputSubmit(text);
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
            placeholder="Search the CyberWeb Mainframe"
            helperText="data input"
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