import './App.css'
const userData=fetch("http://localhost:3000/user")
.then(res=>res.json())
import Users from './Components/Users'

function App() {

  return (
    <>  
          <h1>Simple Card</h1>
          <Users UserData={userData}></Users>
    </>
  )
}

export default App
