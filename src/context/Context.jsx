// src/context/Context.jsx
import { createContext, useState, useEffect } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [result, setResult] = useState("");

  // onSent returns the response (so callers can await it)
  const onSent = async (prompt) => {
    if (!prompt) return "";
    try {
      // optional: set a temporary state while waiting
      setResult("Thinking...");
      const response = await runChat(prompt);
      setResult(response);
      return response; // important: return the text so useEffect can log it
    } catch (err) {
      setResult("Error: " + (err?.message ?? "unknown"));
      return null;
    }
  };

  // DEBUG: call onSent once on mount to test "What is React?"
  useEffect(() => {
    (async () => {
      const reply = await onSent("What is React?");
      console.log("Debug - onSent reply:", reply);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = { onSent, result };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
