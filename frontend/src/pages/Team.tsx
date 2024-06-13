import axios from "axios";
import { useEffect, useState } from "react"

const Team = () => {
  const [test, setTest] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:8080/teams/api/test")
        .then(response => {
          setTest(response.data);
        })
        .catch(error => console.log(error.message));
  }, [])
  
  return (
    <h1> {test} </h1>
  )
}

export default Team
