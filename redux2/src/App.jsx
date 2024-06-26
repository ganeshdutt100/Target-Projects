
import './App.css'

import {Provider ,useSelector , useDispatch} from 'react-redux';
import {store} from './redux/store'



const Counter = () =>{
const count  = useSelector((state) =>state.count);
const dispatch  = useDispatch();

return (
  <>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>Add</button>
  <button onClick={()=>dispatch({type:'DECREMENT'})}>Subtract</button>
  <h1>{count}</h1>
  </>
  
)
}
function App() {

  return (
  <Provider store={store}>
      <Counter/>
  </Provider>
  )
}

export default App
