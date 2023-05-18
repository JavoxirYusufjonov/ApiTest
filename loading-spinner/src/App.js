  import Users from './Users';
  import Loader from "./Loader";


  import './App.css';
  import { useEffect,useState } from 'react';
  function App() {
  
    const[ users , setUsers] = useState([]);
    const[loading , setLoading] = useState(false);
    const[selected , setSelected] = useState(null);

  useEffect(() => { 
  setLoading(true);
    fetch("https://reqres.in/api/users?delay=2")
    .then((res) =>{
      return res.json();
    })
    .then((result) => {
      return setUsers(result.data);
  })
  .catch((err) => {
    console.error(err); 
  })
  .finally(() => {
    setLoading(false);
  });
  },  [] );



  return (
      <div className="App">
      <h1>Users</h1>

        { loading ?  (
        <Loader/> )
        : ( 
      <Users users={users} onSelected={(user) => setSelected(user)} />
      )}
    


      <div>
      
        { selected && `${selected.first_name} ${selected.last_name}` } 
      
      </div>

      
      
  </div>
    );
  }

  export default App;
