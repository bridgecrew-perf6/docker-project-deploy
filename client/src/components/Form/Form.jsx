import { useState } from "react";
const axios = require("axios").default;

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

      const response = await axios.post(
        "http://localhost/sendmessage",
        inputFields
      );
      if (!response) throw new Error();

    } catch (error) {
      console.warn("Request error: ", error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input inputHandler={onChangeInputs} />
      <Submit />
    </form>
  );
}
