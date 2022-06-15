import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ChatsList, ChatPage, ChatDesc } from 'components';
import { containerStyles, itemsStyles, chatsListStyles, chatPageStyles, chatDescStyles, accessedSkipStyles, fullScreenStyles } from './chatsStyles';

const Chats = () => {
  const { UserID } = useParams();

  const showWithUserID = UserID ? fullScreenStyles : accessedSkipStyles,
      showWithoutUserID = !UserID ? fullScreenStyles : accessedSkipStyles;

  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      sx={containerStyles}
    >
      <Grid item sx={{ ...itemsStyles, ...chatsListStyles, ...showWithoutUserID }}>
        <ChatsList />
      </Grid>
      <Grid item sx={{ ...itemsStyles, ...chatPageStyles, ...showWithUserID }}>
        <ChatPage />
      </Grid>
      <Grid item sx={{ ...itemsStyles, ...chatDescStyles, ...accessedSkipStyles }}>
        <ChatDesc />
      </Grid>
    </Grid>
  )
}

export default Chats;