import React from 'react'
import './Login.css'
const Index = () => {
  return (
    <div className='cont d-flex align-intems-center justify-content-center mx-auto'>
        <section className='inp'>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="password" className="form-control" placeholder="Password" aria-label="pass" aria-describedby="basic-addon1"></input>
            <button className='btn btn-success w-100'>Log In</button>
        </section>
    </div>
  )
}

export default Index