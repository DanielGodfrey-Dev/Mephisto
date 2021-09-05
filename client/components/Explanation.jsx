import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from './DisplayLink.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    fontSize: '20px',
    width: 600,
    color: 'white',
    backgroundColor: 'purple',
    border: '10px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">CyberWeb Mainframe Usage</h2>
      <br></br>
      <p id="simple-modal-description">
        Mephisto is a simple cyberpunk-style search engine.
      </p>
      <br></br>
      <p>
        It will perform a search and return the best results possible. If new results are desired for the 2nd
        and 3rd link, please re-run the search.
        No data is kept except anonymous search terms from all users for future potential fun usage.
      </p>
      <br></br>
      <p>
        Click the triangle to access the links.
      </p>
      <br></br>
        Hack the Planet.
    </div>
  );

  return (
    <div>
      <button 
        type="button"
        onClick={handleOpen} 
        className={styles.fullerButtonPurple}
        style = {{
          color: 'white',
          background: 'none',
          borderRadius: '0',
          padding: '0.9em 4em',
          letterSpacing: '0.35em',
          fontSize: '15px',
          webkitTransition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s',
          transition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s',
          boxShadow: 'inset 0 0 1em rgba(0, 170, 170, 0.5), 0 0 1em rgba(0, 170, 170, 0.5)',
          border: '#F414ED solid 2px',
          width: '15em',
          backgroundColor: '#F414ED',
          boxShadow: 'inset 0 0 0 rgba(0, 170, 170, 0.5), 0 0 1.5em rgba(0, 170, 170, 0.7)'
        }}
      >
        Mephisto Explanation
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
