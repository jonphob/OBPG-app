import { useCollection } from '../hooks/useCollection'
import img from '../assets/personIcon.svg'
import Avatar from './Avatar'

//styles
import './OnlineUsers.css'

export default function OnlineUsers() {

    const { documents, error } = useCollection('users')
    
    return (
        <div className='user-list'>
            <h2>All Users</h2>
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id} className='user-list-item'>
                    {<span className={user.online ? "online-user" : "offline-user"}></span> }
                    <span>{user.firstName}</span>
                    <Avatar src={img}/>
                </div>
            ))}

            
        </div>
    )
}
