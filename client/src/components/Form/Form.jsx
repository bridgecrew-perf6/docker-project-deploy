import { useState } from "react";

import Input from "../Input/Input";
import Submit from "../Submit/Submit";

import s from "./Form.module.scss";

export default function Form() {
  const [inputFields, setInputFiled] = useState({});

  const onChangeInputs = (e) => {
    setInputFiled({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch('')


    } catch (error) {
      console.warn("Чел...ты...:", error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input inputHandler={onChangeInputs} />
      <Submit />
    </form>
  );
}
