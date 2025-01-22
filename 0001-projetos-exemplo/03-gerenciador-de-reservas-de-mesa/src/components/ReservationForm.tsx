import styles from './ReservationForm.module.css'

import { Change, FormEvent, useState } from "react"
import uuid4 from "uuid4";


import { IAgendamento } from "../interfaces/IAgendahmento";

interface PropsReservationForm{
    onAddAgendamento: (agendamento: IAgendamento) => void;
}


export function ReservationForm({onAddAgendamento}: PropsReservationForm) {
    const [nome, setNome] = useState('')
    const [horario, setHorario] = useState('')
    const [numeroDaMesa, setNumeroDaMesa] = useState(0)

    function handleform(event: FormEvent) {
        event.preventDefault()

        const agendamento: IAgendamento = {
            id: uuid4(),
            nome,
            horario,
            numeroDaMesa
        }

        onAddAgendamento(agendamento)

    }

    function handleNome(event: Change){
        setNome(event.target.value)
    }

    function handleHora(event: Change){
        setHorario(event.target.value)
    }

    function handleNumeroMesa(event: Change){
        setNumeroDaMesa(event.target.value)
    }

    return (
        <>
            <form className={styles.formContainer} onSubmit={handleform}>
                <label>Nome
                    <input type="text"
                        required
                        placeholder="Nome"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={handleNome}

                    />
                </label>
                <label >Horario
                    <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    required 
                    value={horario}
                    onChange={handleHora}
                    />
                </label>
                <label>Número da mesa
                    <input 
                    type="number" 
                    name="numeroDaMesa" 
                    id="numeroDaMesa" 
                    value={numeroDaMesa}
                    onChange={handleNumeroMesa}
                    />
                </label>

                <button className={styles.btnForm} type="submit">Resevar</button>
            </form>
        </>
    )
}