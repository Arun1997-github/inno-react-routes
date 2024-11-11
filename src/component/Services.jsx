import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services-container">
      <div className='servies'>
        <button>
          <Link to="placements">Placements</Link>
        </button>
        <button>
          <Link to="gallery">Gallery</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Services