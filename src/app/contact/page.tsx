// this page will mutate the data, so we need to make it a client component;
'use client'

import { useState } from "react"




function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await fetch('/api/contact',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email})
    })
    console.log('hey');
    
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" required name="email" id="email" onChange={(e)=>{
          console.log(e.target.value);
          setEmail(e.target.value)}} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Contact