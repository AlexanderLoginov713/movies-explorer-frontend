import { useState } from "react";

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setValues({ ...values, [name]: value, });
    setIsValid(target.closest("form").checkValidity());
  };

  return {
    values,
    isValid,
    handleChange,
    setIsValid
  };
}