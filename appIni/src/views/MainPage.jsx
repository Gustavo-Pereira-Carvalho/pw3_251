import { auth } from "../firebase/config";

function MainPage(){

    const handleSingOut =() =>{
        auth.signOut()
    }


    return (
        <div>

            <h1>Pagina Principal</h1>         
             Bem vindo! Sucesso.

             <button onClick={handleSingOut}>Sair</button>
        </div>
    )
}

export default MainPage;