import './Users.css'

export default function Users({users}) {
    return (
        <div className='users'>
            {users.map(user => (
                <div className='user-card'>
                    <img  src={user.image_url} alt={user.username} />
                    <h3>{user.username}</h3>
                </div>
            ))}
        </div>
    )
}
