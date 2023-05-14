import React, { useEffect, useState } from 'react'

const Books = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(err => {
            console.log('Error',err);
        })
    },[]);

  return (
    <>
    <h1>backend data</h1>
    <ul>
        {data.map(item =>(
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
    </>
  )
}

export default Books