import Card from "./UI/Card";
import classes from "./CustomizePassword.module.css";

const CustomizePassword = () => {
  return (
    <Card className={classes.customize}>
      <h1 className={classes.title}>Customize your password</h1>
      <div className={classes["customize-actions"]}>
        <div className={classes["customize-bar"]}>
          <p>Password length: 30</p>
          <input type="range" />
        </div>
        <div className={classes["customize-boxes"]}>
          <ul>
            <li>
              <label htmlFor="setting-1">
                <input type="checkbox" name="setting" id="setting-1" disabled />
                <span>Uppercase</span>
              </label>
            </li>
            <li>
              <label htmlFor="setting-2">
                <input type="checkbox" name="setting" id="setting-2" />
                <span>Lowercase</span>
              </label>
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="setting-3">
                <input type="checkbox" name="setting" id="setting-3" />
                <span>Numbers</span>
              </label>
            </li>
            <li>
              <label htmlFor="setting-4">
                <input type="checkbox" name="setting" id="setting-4" />
                <span>Symbols</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CustomizePassword;
