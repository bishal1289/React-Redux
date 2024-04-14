import { useSelector,useDispatch } from 'react-redux';
import './App.css'


export default function Home() {
  const dispatch = useDispatch();
  const {count} = useSelector(state=>state.custom);

  const add = () =>{
    dispatch({
      type:"increment"
    })
  }

  const sub = () =>{
    dispatch({
      type:"decrement"
    })
  }

  const incBy5 = () =>{
    dispatch({
      type:"incrementBy5",
      payload:5
    })
  }
  return (
    <main>
      <h1>Home Component</h1>
      <h1>{count}</h1>
      <button onClick={add}>Incement</button>
      <button onClick={sub}>Decement</button>
      <button onClick={incBy5}>IncementBy 5</button>
    </main>
  )
}
