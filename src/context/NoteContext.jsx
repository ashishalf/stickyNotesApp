import { createContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../appwrite/databases";
 
export const NoteContext = createContext();
 
const NotesProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState();
 
    useEffect(() => {
        init();
    }, []);
 
    const init = async () => {
        const response = await db.note.list();
        setNotes(response.documents);
        setLoading(false);
    };
 
    const contextData = { notes, setNotes };
 
    return (
        <NoteContext.Provider value={contextData}>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                   loading...
                </div>
            ) : (
                children
            )}
        </NoteContext.Provider>
    );
};
export default NotesProvider;