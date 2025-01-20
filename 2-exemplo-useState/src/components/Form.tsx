import { v4 as uuid } from 'uuid'
import { FormEvent, Change } from "react";
import { useState } from "react";
import { User } from './ListUsers';

interface Formfunv {
    handleUser: (user: User) => void;
}

export function Form({handleUser}: Formfunv) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')


    function handleForm(event: FormEvent) {
        event.preventDefault()

        const user = {
            id: uuid(),
            nome,
            email
        }

        handleUser(user)
        setNome('')
        setEmail('')

    }

    function handlDadosNome(event: Change<HTMLInputElement>) {
        const nome: string = event.target.value
        setNome(nome)


    }

    function handleEmail(event: Change<HTMLInputElement>) {
        const email: string = event.target.value
        setEmail(email)

    }
    return (
        <>
            <form onSubmit={handleForm}>
                <label >Nome:
                    <input type="text"
                        name="nome"
                        id="nome"
                        placeholder="digite seu nome..."
                        onChange={handlDadosNome}
                        value={nome}

                    />
                </label>
                <label>E-mail:
                    <input type="email"
                        name="email"
                        id="email"
                        onChange={handleEmail}
                        value={email}
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}