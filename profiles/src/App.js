import './App.css';
import Profiles from './Profiles';
import load from "./Users"
import { useEffect,useState  } from 'react';
import Paging from './Paging';
function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    load(currentPage).then((result) => {
      setUsers(result.data);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
    });
  }, [currentPage]);
 
  return( <div className="App"> 
  

  <Profiles users={users}/>
  <Paging 
          currentPage={currentPage} 
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
  />
  
  </div>
  );
}   

export default App;
