import { useState, useEffect, useRef } from 'react';
import { Grid, TextField } from '@mui/material';
import { SentimentSatisfiedAltSharp, SendSharp } from '@mui/icons-material';
import { container, inputIconsContainerStyles, inputIconsStyles, textFieldContainerStyles, textFieldStyles } from './inputStyles';

const Input = ({ clientID }) => {
  const [inputValue, setInputValue] = useState({});

  return (
    <Grid container alignItems='center' justifyContent='space-between' sx={container}>
      <Grid item sx={inputIconsContainerStyles}>
        <SentimentSatisfiedAltSharp sx={inputIconsStyles} />
      </Grid>
      <Grid item sx={{ ...textFieldContainerStyles }}>
        <TextField
          id='input-text'
          sx={textFieldStyles}
          placeholder='Message'
          hiddenLabel
          variant='standard'
          value={inputValue[clientID] || ''}
          onChange={e => setInputValue({ ...inputValue, [clientID]: e.target.value })}
          multiline
          maxRows={3}
          autoFocus
          fullWidth
        />
      </Grid>
      <Grid item sx={inputIconsContainerStyles}>
        <SendSharp sx={inputIconsStyles} />
      </Grid>
    </Grid>
  )
}

export default Input;