import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  input: {
    border: 'none',
    padding: '5px',
    width: '100%',
    color: 'lime',
  },
  form: {
    width: '99%',
    maxWidth: '150ch',
    color: 'lime',
  },
}));

function InputPrompt({ submit }) {
  const classes = useStyles();
  const bashIcon = '$';

  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(value);
    setValue('');
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControlLabel
          className={classes.form}
          label={bashIcon}
          labelPlacement="start"
          control={
            <InputBase
              placeholder="입력"
              className={classes.input}
              onChange={handleChange}
              value={value}
            />
          }
        />
      </form>
    </div>
  );
}

export default InputPrompt;
