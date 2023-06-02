import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

function Home() {

    const [data , setData] = useState([]);
    useEffect(()=>{
    const getData = async ()=>{
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
        const data = await response.json();
        setData(data)


    } 
    getData()
    },[])
  return (
    <div className='home-container'>
      {
        data.length > 0 &&
        data.map((item)=>{
            return(
                <Card item={item} key={item.show.id}/>
            )
        })
      }
    </div>
  )
}

export default Home
