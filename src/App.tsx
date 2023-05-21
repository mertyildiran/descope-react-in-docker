import { Descope, useDescope, useSession, useUser  } from '@descope/react-sdk';
import { useCallback } from 'react';

const App = () => {
  const { isAuthenticated } = useSession();
  const { user } = useUser();
  const { logout } = useDescope();
  const logoutHandler = useCallback(() => {  
    logout();
  }, [logout]);

  return (
    <div>
      <h1>My App</h1>
      {isAuthenticated ? (
        <div>
          <h1>Authenticated</h1>
          <p>Id: {user?.loginIds?.join(', ')}</p>
          <p>Email: {user?.email}</p>
          <p>Name: {user?.name}</p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <Descope flowId='sign-up-or-in'/>
      )}
    </div>
  )
}

export default App;