import './App.css';
import {useEffect, useState} from 'react';
import {getUsers} from './users-service';
import {Header} from './Header';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  // TODO handle errors
  useEffect(() => {
    getUsers()
        .then(users => {
            setUsers(users);
        })
  }, []);

  // TODO - Create a component and add it here to show the list of users. Display an unordered
  //  list in the following format: last_name, first_name (email)
  return (
    <div className="App">
        <Header title="Users List App"/>
      <header className="App-header">
        Users List
      </header>
        {/*TODO - Show a "loading" while the users are being loaded*/}
        {/*TODO - Show a "Sorry, there was an error." if there's an error*/}
        <div className="users">
            {/*TODO - DISPLAY USERS HERE*/}
        </div>
    </div>
  );
}

export default App;
