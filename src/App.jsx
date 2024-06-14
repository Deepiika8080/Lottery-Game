
import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket';
import TicketNum from './TicketNumber';
import {sum } from "./helper";

function App() {
  let wincondition = (ticket) => {
      return ticket.every((num) =>   
        num === ticket[0]    
      );
  };

  return (
    <>
     <Lottery n={3} wincondition={wincondition}/>
    </>
  )
}

export default App;
