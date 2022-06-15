import { Box, Typography } from "@mui/material";
import { Check } from '@mui/icons-material'
import { itemStyles, lastChildSpacing, setItemOnLeft, setItemOnRight, textStyles, timeStyles, checkIconStyles, timeForLeftPosStyles, timeForRightPosStyles } from './textRenderingStyles';

const TextRendering = ({ fromClient, from, text, time, status }) => {
  const positionStyle = fromClient ? setItemOnRight : setItemOnLeft,
    positionTimeStyle = fromClient ? timeForRightPosStyles : timeForLeftPosStyles,
    checkIconColor = status === 'sent' ? { color: '#444' } : {}

  return (
    <Box component='li' sx={{ ...positionStyle, ...itemStyles }}>
      <Typography variant='subtitle1' component='h3' color='#fff' sx={textStyles}>
        {text}
      </Typography>
      <Typography variant='caption' component='span' color={fromClient ? '#90D0F7' : '#808080'} sx={{ ...positionTimeStyle , ...timeStyles }}>
        {time}
        { fromClient && <Check sx={{ ...checkIconStyles, ...checkIconColor }} /> }
      </Typography>
    </Box>
  );
}

export default TextRendering;