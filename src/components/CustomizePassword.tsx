import Card from "./UI/Card";
import classes from "./CustomizePassword.module.css";
import Settings from "../models/settings";

const CustomizePassword: React.FC<{
  onGeneratePassword: (length: number) => void;
  passwordSettings: Settings;
  length: number;
  onChangeLength: (length: number) => void;
  onChangeSettings: (setting: { key: string; isActive: boolean }) => void;
}> = ({
  onGeneratePassword,
  passwordSettings,
  length,
  onChangeLength,
  onChangeSettings,
}) => {
  const countConditionals = () => {
    const settings = {
      lowercase: passwordSettings.lowercase ? 1 : 0,
      uppercase: passwordSettings.uppercase ? 1 : 0,
      numbers: passwordSettings.numbers ? 1 : 0,
      symbols: passwordSettings.symbols ? 1 : 0,
    };

    const totalCount =
      settings.lowercase +
      settings.uppercase +
      settings.numbers +
      settings.symbols;

    return totalCount;
  };

  const lowercaseChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeSettings({ key: "lowercase", isActive: event.target.checked });
  };

  const uppercaseChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeSettings({ key: "uppercase", isActive: event.target.checked });
  };

  const numbersChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSettings({ key: "numbers", isActive: event.target.checked });
  };

  const symbolsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSettings({ key: "symbols", isActive: event.target.checked });
  };

  const changeAndGeneratePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeLength(+event.target.value);

    onGeneratePassword(+event.target.value);
  };

  return (
    <Card className={classes.customize}>
      <h1 className={classes.title}>Customize your password</h1>
      <div className={classes["customize-actions"]}>
        <div className={classes["customize-bar"]}>
          <p>Password length: {length}</p>
          <input
            type="range"
            min="4"
            max="50"
            defaultValue={length}
            onChange={changeAndGeneratePassword}
          />
        </div>
        <div className={classes["customize-boxes"]}>
          <ul>
            <li>
              <label htmlFor="setting-1">
                <input
                  type="checkbox"
                  name="setting"
                  id="setting-1"
                  onChange={uppercaseChangeHandler}
                  disabled={
                    passwordSettings.uppercase && countConditionals() === 1
                  }
                  defaultChecked
                />
                <span>Uppercase</span>
              </label>
            </li>
            <li>
              <label htmlFor="setting-2">
                <input
                  type="checkbox"
                  name="setting"
                  id="setting-2"
                  onChange={lowercaseChangeHandler}
                  disabled={
                    passwordSettings.lowercase && countConditionals() === 1
                  }
                  defaultChecked
                />
                <span>Lowercase</span>
              </label>
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="setting-3">
                <input
                  type="checkbox"
                  name="setting"
                  id="setting-3"
                  onChange={numbersChangeHandler}
                  disabled={
                    passwordSettings.numbers && countConditionals() === 1
                  }
                />
                <span>Numbers</span>
              </label>
            </li>
            <li>
              <label htmlFor="setting-4">
                <input
                  type="checkbox"
                  name="setting"
                  id="setting-4"
                  onChange={symbolsChangeHandler}
                  disabled={
                    passwordSettings.symbols && countConditionals() === 1
                  }
                />
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
