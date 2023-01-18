import logo from './logo.svg';
import './App.css';
import {increment} from './Redux/counterSlice'
import { useDispatch,useSelector } from 'react-redux';
function App() {
  const count = useSelector(state=>state.counterReducer.count)

  const dispatch = useDispatch()
const handleIncr=()=>{
  dispatch(increment())
}
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>dispatch(handleIncr)}>+</button>
        {count}
      </header>
    </div>
  );
}

export default App;
