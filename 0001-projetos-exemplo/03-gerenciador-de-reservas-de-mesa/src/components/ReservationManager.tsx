import { useState } from "react";
import { ReservationForm } from "./ReservationForm";
import { IAgendamento } from "../interfaces/IAgendahmento";
import { ReservationList } from "./ReservationList";

export function ReservationManager() {
    const [listaAgendamento, setListaAgendamento] = useState<IAgendamento[]>([])

    function handleAddAgendamento(agendamento: IAgendamento) {
        setListaAgendamento((prevAgendamento) =>
            [...prevAgendamento, agendamento])
    }

    function handleDeletar(agendamento: IAgendamento){
        setListaAgendamento(agendamentos => agendamentos.filter(
            agendamento_filtrado => agendamento_filtrado.id !== agendamento.id
        ))
    }
    return (
        <>
            <ReservationForm onAddAgendamento={handleAddAgendamento} />
            <ReservationList onPassarLista={listaAgendamento} onDeleteAgendamento={handleDeletar}/>
        </>
    )
}

