import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Perfil() {
    const history = useHistory();
    const auth = useAuth();

    return (
        <div className="perfil">
            {auth.erro ? <h1>{auth.erro}</h1> : <h1>Seja bem-vindo, {auth.name}</h1>}
            {!auth.erro && <Link to='/'>Home</Link>}
            <button onClick={() => auth.deslogar(() => history.push('/'))}>{auth.erro ? 'Voltar' : 'Sair'}</button>
        </div>
    )
}

export default Perfil;