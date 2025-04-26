import React from 'react'
import robot from "../../assets/robot.png";
import './Content.css';

const Content = () => {
  return (
    <main className='content'>
        <section className='content-area'>
            <div className='robot'>
                <img src={robot}/>
                <h1 className='welcome'>Welcome to Site AI for Smart Wells, What can I do for you</h1>
            </div>
            <div></div>
            <div></div>
        </section>
        <aside className='sidebar'></aside>
    </main>
  )
}

export default Content
