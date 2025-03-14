import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase/config";

function MainPage(){
    const handleSingOut =() =>{
        auth.signOut()
    }

    const {user} = useAuth()

    return (
        <div>

            <h1>Pagina Principal</h1>         
             Bem vindo! Sucesso.
             { user.displayName && <p>Nome: { user.displayName} </p> }

             { user.photoURL && <img src={user.photoURL} alt="Foto do usuario"/> } <br />

             <p>E-mail: { user.email }</p><br />

             <button onClick={handleSingOut}>Sair</button>
        </div>
    )
}

export default MainPage;