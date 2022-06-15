import { Box } from '@mui/material';
import { container } from './chatsStyles';
import RenderedMsgs from './RenderedMsgs';
import NoChatFound from './NoChatFound';

const myUsername = 'omidshunm';

const Chats = ({ chatsData }) => {
  return (
    <Box component='ul' sx={container}>
      {
        chatsData ? <RenderedMsgs clientUsername={myUsername} msgs={chatsData} /> : <NoChatFound />
      }
    </Box>
  )
}

export default Chats;