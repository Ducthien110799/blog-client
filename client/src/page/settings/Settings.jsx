
import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './settings.css'
import axios from 'axios'

export default function Settings() {
    const { user, dispath } = useContext(Context)
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const PF = 'http://localhost:5000/images/'

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispath({ type: 'UPDATE_START' })
        const updatedUser = {
            userId: user._id,
            username, email, password
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axios.post('/upload', data)
            } catch (error) { }
        }
        try {
            const res = await axios.put('/users/' + user._id, updatedUser)
            setSuccess(true)
            dispath({ type: 'UPDATE_SUCCESS', payload: res.data })
        } catch (error) {
            dispath({ type: 'UPDATE_FAILURE' })
        }

    }

    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Uptdate Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                        <label htmlFor='fileInput'>
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type='file' id='fileInput' style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.email)} />
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type='submit'>Update</button>
                    {success && (<span style={{ color: "green", textAlign: "center", marginTop: 20 }}>Profile has been updated ....</span>)}
                </form>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}
