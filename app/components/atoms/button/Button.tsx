import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  children?: JSX.Element | string;
  btnType?: string;
}

export const Button = (props: ButtonProps) => {
  const modeClass = props.btnType == "primary" ? "primary" : "secondory";
  return (
    <button className={[styles.btn, modeClass].join(" ")} type="button">
      {props.label}
    </button>
  );
};
