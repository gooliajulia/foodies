import './App.css';
import Layout from './layouts/Layout'
import Landing from './screens/Landing'
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import { useState, useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import { verifyUser, loginUser, registerUser, getUsers, removeToken } from './services/auth'
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers ] = useState([]);
  const history = useHistory();

  useEffect(()=> {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  },[]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await getUsers();
      setUsers(allUsers); 
    };
    fetchAllUsers();
  },[])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }



  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <LogIn 
            handleLogin={handleLogin}/>
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister}/>
        </Route>
        <Route path='/home'>
          <Layout 
            currentUser={currentUser} 
            users={users}>
                  <MainContainer currentUser={currentUser} handleLogout={handleLogout} users={users}/>
          </Layout>
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
