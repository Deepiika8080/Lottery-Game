import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button.jsx";
import "./Lottery.css";

export default function Lottery({ n, wincondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = wincondition(ticket);

    let buyticket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h2>Lottery Game!!</h2>
            <Ticket ticket={ticket}/>
            <Button buyticket={buyticket}/>
            <h3>{isWinning && "Congratulations you won the game"}</h3>
        </div>
    )
}