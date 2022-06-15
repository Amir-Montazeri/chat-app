import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import chats from './sample-data.json';
import { containerStyles, itemsStyles, activeItemStyles, avatarContainerStyles, avatarStyles, msxContentStyles, linesController, nameContainerStyles, timeContainerStyles } from './chatsListStyles';

const myUsername = 'omidshunm';

const ChatsList = () => {
  const navigate = useNavigate(),
      { UserID } = useParams();

  const setUserID = ID => navigate(`/chats/${ID}`);

  const renderedChatsList = items => items.map(({userID, username, name, profileUrl, lastMsg, unreadMsgCount}) => {
    const extraStyles = username === UserID ? activeItemStyles : {}
    return (
      <Box key={userID} sx={{ ...itemsStyles, ...extraStyles }} component='li' onClick={() => setUserID(username)}>
        <Box sx={avatarContainerStyles}>
          <Avatar alt={`${name}'s profile`} src={profileUrl || ''} sx={avatarStyles}>
            { !profileUrl && name[0] }
          </Avatar>
        </Box>
        <Box sx={msxContentStyles}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item sx={nameContainerStyles}>
              <Typography variant='h6' component='h3' color='#fff' sx={linesController}>
                { username === myUsername ? 'Saved Messages' : name }
              </Typography>
            </Grid>
            <Grid item sx={timeContainerStyles}>
              <Typography variant='caption' component='p' color='#808080'>
                { lastMsg.time }
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='body2' component='p' color='#808080' sx={linesController}>
            { lastMsg.msgContent }
          </Typography>
        </Box>
      </Box>
    )
  })

  return (
    <Box sx={containerStyles} component='ul'>
      {renderedChatsList(chats)}
    </Box>
  )
}

export default ChatsList;