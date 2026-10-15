import { useState ,useEffect} from 'react'
import './App.css'
const storage_key = "taskmanager.tasks"
function App() {
const [task,setTask]=useState("")
const [manager,setManager]=useState(null)

handleFileChange=(e)=>{
  setFile(e.target.files[0])
}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(file)
}   
if(setFile!=null)
{
  alert("Enter valid details of the file")
  return
}

[...setFile]
{
    name=name
    size=size
    
}
<form>
  <h1>Task Manager</h1>
  <input type="text" placeholder='Names'></input>
  <input type="text" placeholder='Task'></input>

</form>
export default App
