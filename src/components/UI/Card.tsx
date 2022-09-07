import { ReactNode } from "react";
import classes from "./Card.module.css";

const Card: React.FC<{ children: ReactNode; className: string }> = ({
  children,
  className,
}) => {
  const styles = `${classes.card} ${className}`;

  return <div className={styles}>{children}</div>;
};

export default Card;
