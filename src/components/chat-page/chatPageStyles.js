export const headerContainerStyles = {
  height: '7%',
  display: 'flex',
  justifyContent: 'space-between',
  background: '#202022',
  '@media screen and (max-height: 710px)': {
    height: '10vh'
  },
  '@media screen and (max-height: 510px)': {
    height: '15vh'
  }
},

chatsContainerStyles = {
  height: '86.5%',
  backgroundSize: 'cover !important',
  backgroundRepeat: 'no-repeat !important',
  backgroundPosition: 'center !important',
  overflowY: 'auto',
  '@media screen and (max-height: 710px)': {
    height: '80vh'
  },
  '@media screen and (max-height: 510px)': {
    height: '72vh'
  }
},

inputContainerStyles = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: '#202022',
  '@media screen and (max-height: 710px)': {
    // minHeight: '10vh'
  },
  '@media screen and (max-height: 510px)': {
    // minHeight: '13vh'
  }
};