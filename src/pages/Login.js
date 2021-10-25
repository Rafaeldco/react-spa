import { useHistory, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function handleSubmit(event) {
    event.preventDefault();
}

function Login() {
    const history = useHistory();
    const auth = useAuth();

    return (
        <form onSubmit={handleSubmit}>
            <div className="login">
                <Link to='/'>Home</Link>
                <input type="text" onChange={(e) => auth.setValue(e.target.value)} value={auth.value}></input>
                <input type="submit" onClick={() => auth.logar(() => history.push('/perfil'))} value="Login" />
            </div >
        </form>
    )
}

export default Login;