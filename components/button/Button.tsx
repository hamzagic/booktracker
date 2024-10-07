import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ children, color, onClick }: { children: React.ReactNode; color?: string; onClick?: () => void }) => {
  const btnClass = classNames(styles.button, { [styles.danger]: color === 'danger' });
  return <button className={btnClass} onClick={onClick}>{children}</button>;
};

export default Button;
