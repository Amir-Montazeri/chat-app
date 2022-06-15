export const itemStyles = {
  position: 'relative',
  margin: '2px 3px',
  padding: '9px 20px 15px 6px',
  minWidth: '22%',
  maxWidth: '80%',
  borderRadius: '19px',
  ':nth-child(1)': {
    marginTop: '6px !important'
  },
  ':nth-last-child(1)': {
    marginBottom: '10px !important'
  }
},

setItemOnRight = {
  paddingLeft: '10px !important',
  justifySelf: 'flex-end',
  background: '#3A7DB4',
  borderBottomRightRadius: '0 !important'
},

setItemOnLeft = {
  paddingRight: '13px !important',
  justifySelf: 'flex-start',
  background: '#202123',
  borderBottomLeftRadius: '0 !important'
},

textStyles = {
  lineHeight: '1em !important' 
},

timeStyles = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '11px !important',
  fontWeight: '500',
  lineHeight: '0 !important'
},

timeForRightPosStyles = {
  bottom: 0,
  right: '5px',
},

timeForLeftPosStyles = {
  bottom: '7px',
  right: '14px',
},

checkIconStyles = {
  fontSize: '14px !important'
}