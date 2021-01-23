import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { createBet } from "../../actions/bets";
const Form = () => {
  const [betData, setBetData] = useState({
    wagers: [],
    question: "",
    message: "",
    tags: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(betData);

    dispatch(createBet(betData));
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Make a Bet</Typography>

        <TextField
          name="question"
          variant="outlined"
          label="Question"
          fullWidth
          value={betData.question}
          onChange={(e) => setBetData({ ...betData, question: e.target.value })}
        />
        <TextField
          name="wager"
          variant="outlined"
          label="wager"
          fullWidth
          value={betData.wager}
          onChange={(e) => setBetData({ ...betData, wagers: [e.target.value] })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={betData.message}
          onChange={(e) => setBetData({ ...betData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={betData.tags}
          onChange={(e) =>
            setBetData({ ...betData, tags: e.target.value.split(",") })
          }
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
