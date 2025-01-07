import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Simulate a typing effect for each word
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    // Start a new chat by resetting states
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setInput("");
        setResultData("");
    };

    // Handle sending of a prompt
    const onSent = async (prompt) => {
        setResultData(""); // Clear the result display
        setLoading(true); // Show loading indicator
        setShowResult(true); // Display result section

        let response;
        if (prompt !== undefined) {
            response = await run(prompt); // Use provided prompt
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, input]); // Save prompt to history
            setRecentPrompt(input);
            response = await run(input); // Use current input
        }

        // Parse and format the response
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"; // Correct bold tag
            }
        }

        let newResponse2 = newResponse.split("*").join("<br/>"); // Replace * with <br/>
        let newResponseArray = newResponse2.split(" ");

        // Apply a typing effect
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }

        setLoading(false); // Stop loading indicator
        setInput(""); // Clear the input field
    };

    // Context values for sharing state and functions across components
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
