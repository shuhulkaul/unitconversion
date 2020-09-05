import React, { useState, Component } from "react";
import "./css/style.scss";
import Conversions from "./Conversions.js";
import ErrorScreen from "./ErrorScreen.js";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ShortTextTwoToneIcon from "@material-ui/icons/ShortTextTwoTone";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// const useStyles = makeStyles({
//     root: {
//         width: 300,
//     },
//     label: {
//         color: 'white',
//         letterSpacing: 20,
//         textTransform: 'capitalize',
//     }
// });
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#d6e0f0",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const StyledTextField = withStyles({
  root: {
    width: 300,
  },
  label: {
    color: "white",
    letterSpacing: 20,
    textTransform: "capitalize",
  },
})(TextField);

function Home() {
  const [num, setNum] = useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const classes = useStyles();
  // alert(num);
  return (
    <div className="container">
      <div className="heading">
        <p className="heading-text">CONVERT</p>
        <p className="subheading-text">UNITS ONLY</p>
        <IconButton onClick={handleOpen}>
          <InfoIcon />
        </IconButton>
      </div>
      <div className="wrapper">
        <StyledTextField
          id="outlined-textarea"
          label="ENTER A NUMBER"
          // classes={{
          //     root: classes.root, // class name, e.g. `classes-nesting-root-x`
          //     label: classes.label, // class name, e.g. `classes-nesting-label-x`
          //   }}
          name="num"
          value={num}
          onChange={(e) => setNum(e.target.value.replace(/\s/g, ""))}
          variant="outlined"
        />
        {num === "" ? (
          <h1></h1>
        ) : isNaN(num) ? (
          <ErrorScreen />
        ) : (
          <Conversions number={num} />
        )}
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="spring-modal-title">About</h3>
            <p id="spring-modal-description">Made with ♥ by Shuhul Kaul.</p>
            <IconButton target="_blank" href="https://github.com/shuhulkaul">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/shuhulkaul22"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton target="_blank" href="https://twitter.com/shuhulkaul_">
              <TwitterIcon fontSize="small" />
            </IconButton>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Home;
