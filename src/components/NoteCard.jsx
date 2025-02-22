import { motion } from "motion/react";
import DeleteButton from "./DeleteButton";
import { db } from "../appwrite/databases";
import { useEffect, useRef, useState } from "react";
import { autoGrow, bodyParser } from "../utils";


const NoteCard = ({ note, dragRef, setNotes }) => {
  const [saving, setSaving] = useState(false);
  const keyUpTimer = useRef(null);

  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const saveData = async (key, value) => {
    const payload = { [key]: JSON.stringify(value) };
    try {
      await db.note.update(note.$id, payload);
    } catch (error) {
      console.error(error);
    }
    setSaving(false);
  };

  const handleKeyUp = async () => {
    setSaving(true);
    if (keyUpTimer.current) {
      clearTimeout(keyUpTimer.current);
    }
    keyUpTimer.current = setTimeout(() => {
      saveData("body", textAreaRef.current.value);
    }, 2000);
  };

  try {
    let position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
    const body = bodyParser(note.body);

    return (
      <motion.div
        drag
        dragConstraints={dragRef}
        className="card"
        style={{
          backgroundColor: colors.colorBody,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: colors.colorHeader }}
        >
          <DeleteButton noteId={note.$id} setNotes={setNotes}/>
          {saving && (
            <div className="card-saving">
              <span style={{ color: colors.colorText }}>Saving...</span>
            </div>
          )}
        </div>

        <div className="card-body">
          <textarea
            onKeyUp={handleKeyUp}
            ref={textAreaRef}
            style={{ color: colors.colorText }}
            defaultValue={body}
            onInput={() => {
              autoGrow(textAreaRef);
            }}
          ></textarea>
        </div>
      </motion.div>
    );
  } catch (error) {
    console.error("JSON parsing error:", error);
    return <div>Error loading note</div>;
  }
};
export default NoteCard;
