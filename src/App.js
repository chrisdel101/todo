import './App.css';
import Todo from './components/Todo';
import { useEffect } from 'react' 
function App() {
    useEffect(() => {
      window.process = {
        ...window.process,
      };
    }, []);
   return (
   <div className="App">
   <Todo />
   </div>
  );
}

export default App;