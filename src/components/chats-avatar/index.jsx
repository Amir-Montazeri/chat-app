import { Avatar } from '@mui/material';
import { BookmarkBorderOutlined } from '@mui/icons-material';
import { avatarSavedMessagesStyles, bookmarkIconStyles } from './chatsAvatarStyles';

const ChatsAvatar = ({ clientUsername, avatarUsername, avatarName = '', avatarProfileUrl = '', sx = {} }) => {
  const isSavedMessages = clientUsername === avatarUsername;

  return (
    <Avatar alt={`${avatarName}'s profile`} src={!isSavedMessages ? avatarProfileUrl : ''} sx={{ ...sx, ...avatarSavedMessagesStyles }}>
      {
        isSavedMessages ?
        <BookmarkBorderOutlined sx={bookmarkIconStyles} /> :
        avatarName[0]
      }
    </Avatar>
  );
}

export default ChatsAvatar;