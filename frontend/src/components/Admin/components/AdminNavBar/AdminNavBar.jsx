import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const AdminNavBar = ({children}) => {
  return (
    <div className='admin-nav-bar'>
        <Sidebar />
        

        <div className="nav-bar-content" style={{background: 'whitesmoke'}}>
          <div className="dashboard-top-content">
              <li className="dashboard-top-content-avatar">
                <img src="https://res.cloudinary.com/dx8xengfd/image/upload/v1666243178/avatars/avatar-gau-cute_1_bkhh1v.jpg"></img>
                <span>Admin</span>
              </li>
              <li className="dashboard-top-content-bell">
                {/* <BellOutlined></BellOutlined> */}
              </li>
          </div>
            {children}
        </div>

    </div>
  )
}

export default AdminNavBar
