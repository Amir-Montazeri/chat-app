import { CssBaseline, GlobalStyles } from '@mui/material';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Chats } from 'pages';
import styles from 'globalStyles';

const chatsPagePaths = ['/chats', '/chats/:UserID'];

const Routes = () => useRoutes([
  { path: '/test', element: <Chats /> },
  ...chatsPagePaths.map(path => ({ path, element: <Chats /> }))
]);

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyles styles={styles} />
      <Routes />
    </Router>
  )
}

export default App;