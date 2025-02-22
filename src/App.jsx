import { useRef } from "react";
import NoteCard from "./components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "./context/NoteContext";
import Controls from "./components/Controls";

 
function App() {
 
    const { notes } = useContext(NoteContext);


    const containerRef = useRef(null);
    return (
        <div id="app" ref={containerRef}>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} dragRef = {containerRef}/>
            ))}
            <Controls />
        </div>
    );
}

export default App
