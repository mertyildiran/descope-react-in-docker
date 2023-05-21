import ReactDOM from 'react-dom';
import { AuthProvider  } from '@descope/react-sdk';
import App from './App';

const AppContainer = () => {
  return (
    <AuthProvider projectId="P2My9KRakUMj40L8KOBjAJLVWhWC">
      <App/>
    </AuthProvider>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));