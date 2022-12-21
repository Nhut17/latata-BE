import React from 'react'
import { Link } from 'react-router-dom'
import tech_1 from '../../assets/images/home/tech_1.jpg'

const Tech24h = () => {



  return (
    <div className='tech24h' id='tech24hs'>
        <h3>24H Công Nghệ</h3>
      <div className="list-news flex j-between">
        <Link to='/news24h' className="news">
            <img src='https://cdn.tgdd.vn/Files/2021/10/20/1392281/dienthoaivivototnhat20222_800x450-600x400.jpg' alt="" />
            <p>Samsung tung ra trailer sự kiện Unpacked 10/8, hé lộ Galaxy Z Series mới</p>

        </Link>
        <Link to='/hoidap' className="news" >
            <img src='https://cdn.tgdd.vn/Files/2022/12/02/1492480/casio_1280x720-600x400.jpg' alt="" />
            <p>Cưỡng sao nổi với loạt DEAL Samsung Galaxy Watch4 giảm tới 3 triệu</p>

        </Link>
        <Link to='/gameApp' className="news">
            <img src='https://cdn.tgdd.vn/2022/04/content/Gunny-Origin-600x360.jpg' alt="" />
            <p>Gunny Origin - Sống Lại Cảm Giác Gà: game bắn súng tọa độ Gunny</p>

        </Link>
      </div>
    </div>
  )
}

export default Tech24h
