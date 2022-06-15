export const containerStyles = {
  height: '100%',
  listStyle: 'none',
},

itemsStyles = {
  position: 'relative',
  padding: '9px 5px',
  width: '100%',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  transition: '.2s',
  cursor: 'pointer',
  '::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '1px',
    width: '75%',
    background: '#0C0C0C'
  },
  ':hover': {
    background: '#161616'
  }
},

activeItemStyles = {
  background: '#252525 !important'
},

avatarContainerStyles = {
  marginRight: '9px'
},

avatarStyles = {
  height: '43px',
  width: '43px'
},

msxContentStyles = {
  width: '200%'
},

linesController = {
  display: "-webkit-box",
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
},

nameContainerStyles = {
  width: '85%'
},

timeContainerStyles = {
  width: '15%'
};