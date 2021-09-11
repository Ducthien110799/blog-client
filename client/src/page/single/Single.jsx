import './single.css'
import '../../components/sidebar/Sidebar'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar></Sidebar>
        </div>
    )
}
