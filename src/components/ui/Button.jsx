import "./Button.css";

export const Button = ({ text, clickFn }) => {
  return (
    <>
      <button className="button" onClick={clickFn}>
        {text}
      </button>
    </>
  );
};
