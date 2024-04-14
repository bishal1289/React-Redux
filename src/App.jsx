import './App.css'
import Home from "./Home"
import {useSelector} from "react-redux";

export default function App() {
  const {count} = useSelector(state=>state.custom)
  return (
    <main>
      <h1>App Component</h1>
      <p>{count}</p>
      <Home></Home>
    </main>
  )
}
