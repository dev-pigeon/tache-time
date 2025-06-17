import { useState } from "react"

export interface useValidationReturn {
    message : string | null;
    success : "success" | "error";
    setValidationMessage : (msg : string | null) => void;
    setValidationStatus : (status : "success" | "error") => void;
    clearValidation : (time : number) => void;
 }

const useValidation = () : useValidationReturn => {
    const [message, setMessage] = useState<string | null>("Task added succesfully!");
    const [success, setSuccess] = useState<"success" | "error">("success");


     const setValidationMessage = (newMessage: string | null) => {
        setMessage(newMessage)
      };
    
      const setValidationStatus = (status: "success" | "error") => {
        setSuccess(status);
      };
    
      const clearValidation = (timeToClear: number) => {
        setTimeout(() => {
          setValidationMessage(null);
        }, timeToClear);
      };

      return {
        setValidationMessage,
        success,
        setValidationStatus,
        clearValidation,
        message
      }
}

export default useValidation;