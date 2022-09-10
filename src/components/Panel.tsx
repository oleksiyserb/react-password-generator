import Copy from "./icons/Copy";
import Refresh from "./icons/Refresh";
import Card from "./UI/Card";
import classes from "./Panel.module.css";

const Panel: React.FC<{ password: string; onRefresh: () => void }> = ({
  password,
  onRefresh,
}) => {
  let bottomColor;

  if (password.length <= 8) {
    bottomColor = classes["panel-easy"];
  } else if (password.length > 8 && password.length <= 16) {
    bottomColor = classes["panel-middle"];
  } else {
    bottomColor = classes["panel-hard"];
  }

  const panelBottomClasses = `${classes["panel-bottom"]} ${bottomColor}`;

  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    alert("Copied!");
  };

  return (
    <Card className={classes.panel}>
      <div className={classes["panel-content"]}>
        <div className={classes["panel-text"]}>
          <input type="text" value={password} disabled />
        </div>
        <div className={classes["panel-actions"]}>
          <button onClick={copyHandler}>
            <Copy />
          </button>
          <button onClick={onRefresh}>
            <Refresh />
          </button>
        </div>
      </div>
      <div className={panelBottomClasses}></div>
    </Card>
  );
};

export default Panel;
