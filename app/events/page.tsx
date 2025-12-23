
import {CardTile} from "../components/cards";
import Navbar from "../components/navbar";
import { TableComp } from "../components/table";

export default function Event() {
  return (
    <>
    <div id="eventspage">
     <Navbar/>   
       
    </div>
    <p className="text-semibold text-xl ml-20 mt-5">Event Overview</p>
   
    <div className="flex flex-row justify-center gap-10 pt-7 ">
    
      <CardTile info="Total events" stats={10} num={1231} />
      <CardTile info="Upcoming events" stats={12} num={31}/>
      <CardTile info="Ongoing events" stats={13} num={631}/>
      <CardTile info="Cancelled events" stats={5} num={19}/>
    </div>
    <TableComp/>
    </>
  );
}
