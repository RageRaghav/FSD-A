import React from 'react'
import {Link,Outlet} from 'react-router-dom';
const MainLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default MainLayout