import React, { useEffect, useState } from 'react'
import "./Form.css"
function Form({movieName,handleModal}) {
    const [data,setData] = useState({name:"",phoneNumber:"",email:"",movieName:""});
    const handleData = (e) => {
        setData({
            ...data,[e.target.name]:e.target.value,movieName
        })
        

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("data",JSON.stringify(data))
        handleModal();
        alert("Ticket Booked Successfully")
    }
    useEffect(()=>{
        if(localStorage.getItem("data")){
            const data = JSON.parse(localStorage.getItem("data"));
            setData(data);
        }
    },[])
  return (
    <div className='form-container'>
        <i className="fa-solid fa-xmark" onClick={handleModal}></i>
      <form onSubmit={handleSubmit}>
        <h4>Booking for:<span>{movieName}</span></h4>
        <label>Name:</label>
        <input type="text" value={data.name} name='name' onChange={handleData} placeholder='your name..'/>
        <label>Phone Number</label>
        <input type="text" value={data.phoneNumber} name='phoneNumber' onChange={handleData} placeholder='your phone number'/>
        <label>Email:</label>
        <input type="email" value={data.email} name='email' onChange={handleData} placeholder='your email address..'/>

        <input type="submit" value="Book Now" />
      </form>
    </div>
  )
}

export default Form
