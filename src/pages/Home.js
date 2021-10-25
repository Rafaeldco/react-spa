import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <Link to='/login'>Login</Link>
            <Link to='/perfil'>Perfil</Link>
        </div>
    )
}

export default Home;