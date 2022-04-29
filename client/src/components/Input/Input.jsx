import s from "./Input.module.scss";

export default function Input(props) {
  const { inputHandler } = props;

  return (
    <div>
      <input
        type="text"
        maxLength="50"
        name="inputData"
        onChange={inputHandler}
      />
    </div>
  );
}
