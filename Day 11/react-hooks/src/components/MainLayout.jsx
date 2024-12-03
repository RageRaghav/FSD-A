import React from 'react'
import {Link,Outlet} from 'react-router-dom';
const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/counter"}>CounterApp</Link>
          </li>
          <li>
            <Link to={"/image"}>ImageApp</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainLayout