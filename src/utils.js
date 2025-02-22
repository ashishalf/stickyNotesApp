
export function autoGrow(textAreaRef) {
    const { current } = textAreaRef;
    current.style.height = "auto"; // Reset the height
    current.style.height = textAreaRef.current.scrollHeight + "px"; // Set the new height
}

export const bodyParser = (value) => {
    try {
        JSON.parse(value);
        return JSON.parse(value);
    } catch (error) {
        console.error("JSON parsing error:", error);
        return value;
    }
}