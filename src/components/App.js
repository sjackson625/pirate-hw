import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import piratesFile from "../data/sample-pirates-array";
import AddPirate from "../components/AddPirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
  const [pirates] = React.useState(piratesFile);
 return (
   <div>
     <Header title={randomize()} />
     <div className="pirate">
       <AddPirate />
       {pirates.map((pirate) => (
         <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} />
       ))}
     </div>
   </div>
 );
}

export default App;
