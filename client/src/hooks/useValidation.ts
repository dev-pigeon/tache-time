import { useState } from "react"

export interface useValidationReturn {
    message : string | null;
    success : boolean;
    setValidationMessage : (msg : string | null) => void;
    setValidationStatus : (status : boolean) => void;
    clearValidation : (time : number) => void;
 }

const useValidation = () : useValidationReturn => {
    const [message, setMessage] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(true);


     const setValidationMessage = (newMessage: string | null) => {
        setMessage(message)
      };
    
      const setValidationStatus = (status: boolean) => {
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