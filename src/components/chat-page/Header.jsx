import { Box, Typography } from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ChatsAvatar } from 'components';
import { 
  headerContainersStyles,
  arrowBackContainerStyles,
  profileContainerStyles,
  moreVertContainerStyles, 
  avatarStyles,
  iconsStyles,
  profileContentStyles
} from './headerStyles';

const myUsername = 'omidshunm';

const Header = ({ profileData }) => {
  const navigate = useNavigate();

  const backHome = () => navigate('/chats')

  return (
    <>
      <Box sx={{ ...headerContainersStyles, ...arrowBackContainerStyles }} onClick={backHome}>
        { profileData && <ArrowBack sx={iconsStyles} /> }
      </Box>
      <Box sx={{ ...headerContainersStyles, ...profileContainerStyles }}>
        <ChatsAvatar
          clientUsername={myUsername}
          avatarUsername={profileData?.username}
          avatarName={profileData?.name}
          avatarProfileUrl={profileData?.profileUrl}
          sx={avatarStyles}
        />
        <Box sx={profileContentStyles}>
          <Typography variant='h6' component='h3' color='#fff'>
            {
              profileData?.username === myUsername ? 'Saved Messages' :
              profileData?.username || 'Didnt Selected!'
            }
          </Typography>
          <Typography variant='body2' component='p' color='#808080'>
            {
              profileData?.username !== myUsername &&
              profileData?.lastActivity
            }
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...headerContainersStyles, ...moreVertContainerStyles }}>
        <MoreVert sx={iconsStyles} />
      </Box>
    </>
  )
}

export default Header;