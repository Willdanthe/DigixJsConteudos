import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState(null);
    const [UserEmail, setUserEmail] = useState(null);

    const enviarEmail = (e) => {
        e.preventDefault();
        setUserEmail(email)
        console.log(UserEmail);
    };

    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu e-mail..."
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
            </form>
            {UserEmail && (
                <>
                    <p>Email do último usuário: {UserEmail}</p>
                    <button onClick={()=> {setUserEmail(null)}}>Apagar e-mail</button>
                </>
            )}
        </div>
    );
}

export default Condicional;
