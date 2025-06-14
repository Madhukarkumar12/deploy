import React from 'react'
import robot from "../../assets/robot.png";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import './Content.css';
import { ArrowRight, SearchIcon } from 'lucide-react';

const Content = () => {
  return (
    <main className='content'>
      <section className='content-area'>
        <div className='robot'>
          <img src={robot} />
          <h1 className='welcome'>Welcome to Site AI for Smart Wells, What can I do for you</h1>
        </div>
        <div className='search'>
          <div className='suggestion'>
            <button className='chip'><span>Show people who are inside  ..</span></button>
            <button class="chip"><span>Show all the equipment in facility map</span></button>
            <button class="chip"><span>Show yesterday's safety infractions</span></button>
            <button class="chip"><span>Show last 7 days analytics for Peter Bishop</span></button>
          </div>
          <form className='search-form'>
            <textarea className='query-input' placeholder='Enter Your query'></textarea>
            <button className='search-button'>
              <img src={search} alt="search" />
            </button>
          </form>
        </div>
      </section>
      <aside className='sidebar'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>
            <span className='past'>Past Queries</span>
            <span className='save'>Saved Queries</span>
          </div>
         <ArrowRight className='arrow'/>
        </div>
        <div className='dashline'>
          <hr className='dash1'/>
          <hr className='dash2'/>
        </div>
        <div className='search-container'>
           <SearchIcon className='searchicon'/>
           <input type="text" class="search-input" placeholder="Search..." />
           <img src={sort} className='sort' alt='sort'/>
        </div>
        <div className='query-history'></div>
      </aside>
    </main>
  )
}

export default Content
