import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {

    const [cats, setCats] = useState([])
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className="sidebarTitle">ABOUT ME</span>
                <img src='https://firebasestorage.googleapis.com/v0/b/apidemo-dac8f.appspot.com/o/_MG_7172.jpg?alt=media&token=e6cc273c-bc1d-41c5-8350-7a146646f934' alt='' />
                <p>- Đừng đuổi theo một con ngựa, hãy dùng thời gian đuổi theo nó để trồng cỏ, đợi tới mùa xuân, ắt sẽ có cả đàn ngựa béo cho ta lựa chọn.
                    - Đừng cố làm thân với một người, hãy dùng thời gian ấy để trau dồi năng lực của mình, tới khi thời cơ chín muồi, ắt sẽ có vô số bạn bè đồng hành cùng ta. </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-github-square"></i>
                </div>
            </div>

        </div>
    )
}
