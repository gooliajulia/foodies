import './App.css';
import Layout from './layouts/Layout'
import Landing from './screens/Landing'
import { useState, useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import { verifyUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  },[])

  return (
    <div className="App">
      <Switch>
      <Route path='/'>
        <Landing />
      </Route>
      <Layout currentUser={currentUser} >
      </Layout>
      </Switch>
    </div>
  );
}

export default App;
