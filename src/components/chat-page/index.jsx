import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Chats from './Chats';
import Input from './Input';
import { headerContainerStyles, chatsContainerStyles, inputContainerStyles } from './chatPageStyles';
import sampleData from './sample-data.json';

const bgUrl = 'https://cutewallpaper.org/21/android-4k-wallpaper/mobile-hd-wallpapers-android-wallpapers-hd-pics-mobile-.jpg';

const ChatPage = () => {
  const [userChatData, setUserChatData] = useState();
  const { UserID } = useParams();

  useEffect(() => {
    setUserChatData(sampleData[UserID]);
  }, [UserID]);

  return (
    <>
      <Box sx={headerContainerStyles}>
        <Header profileData={userChatData} />
      </Box>
      <Box sx={{ ...chatsContainerStyles, backgroundImage: `url(${bgUrl})` }}>
        <Chats chatsData={userChatData?.msgs} />
      </Box>
      <Box sx={inputContainerStyles}>
        <Input clientID={UserID} />
      </Box>
    </>
  )
}

export default ChatPage;