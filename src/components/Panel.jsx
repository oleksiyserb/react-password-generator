import Copy from "./icons/Copy";
import Refresh from "./icons/Refresh";
import Card from "./UI/Card";
import classes from "./Panel.module.css";

const Panel = () => {
  return (
    <Card className={classes.panel}>
      <div className={classes["panel-content"]}>
        <div className={classes["panel-text"]}>
          j8329fj3ojreslaf@!jfels@JFHI#$
        </div>
        <div className={classes["panel-actions"]}>
          <button>
            <Copy />
          </button>
          <button>
            <Refresh />
          </button>
        </div>
      </div>
      <div className={classes["panel-bottom"]}></div>
    </Card>
  );
};

export default Panel;
