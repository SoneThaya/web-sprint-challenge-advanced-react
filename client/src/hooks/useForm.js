// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  
  return [showSuccessMessage, handleSubmit, values, handleChanges]
}

