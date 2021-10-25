import { useState } from "react";

export default function useAuthProvider() {
    const [token, setToken] = useState(null);
    const [value, setValue] = useState();
    const [name, setName] = useState();
    const [erro, setErro] = useState(null);

    async function logar(callback) {
        try {
            const response = await fetch(`https://api.github.com/users/${value}`, {
                method: 'GET'
            });
            const data = await response.json();
            if (data.message === "Not Found") {
                setErro("Usuário inválido!");
                console.log(data.message);

            }
            setToken("user");
            setName(data.name);
            callback();
        } catch (error) {
            console.log(error.message);
        }
    }

    const deslogar = (callback) => {
        setToken(null);
        setValue();
        setErro();
        callback();
    }

    return {
        token,
        logar,
        deslogar,
        value,
        setValue,
        name,
        setName,
        erro,
        setErro
    };
}