import { useState } from "react";

import Card from "./UI/Card";
import classes from "./CustomizePassword.module.css";
import Settings from "../models/settings";

const CustomizePassword: React.FC<{
  onGeneratePassword: (settings: Settings, length: number) => void;
}> = ({ onGeneratePassword }) => {
  const [hasUppercase, setHasUppercase] = useState(true);
  const [hasLowercase, setHasLowercase] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  const passwordSettings = {
    uppercase: hasUppercase,
    lowercase: hasLowercase,
    numbers: hasNumbers,
    symbols: hasSymbols,
  };

  const countConditionals = () => {
    const settings = {
      lowercase: hasLowercase ? 1 : 0,
      uppercase: hasUppercase ? 1 : 0,
      numbers: hasNumbers ? 1 : 0,
      symbols: hasSymbols ? 1 : 0,
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
    setHasLowercase(event.target.checked);

    // onGeneratePassword(passwordSettings, passwordLength);
  };

  const uppercaseChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasUppercase(event.target.checked);

    // onGeneratePassword(passwordSettings, passwordLength);
  };

  const numbersChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasNumbers(event.target.checked);

    // onGeneratePassword(passwordSettings, passwordLength);
  };

  const symbolsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasSymbols(event.target.checked);

    // onGeneratePassword(passwordSettings, passwordLength);
  };

  const changeAndGeneratePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordLength(+event.target.value);

    onGeneratePassword(passwordSettings, +event.target.value);
  };

  return (
    <Card className={classes.customize}>
      <h1 className={classes.title}>Customize your password</h1>
      <div className={classes["customize-actions"]}>
        <div className={classes["customize-bar"]}>
          <p>Password length: {passwordLength}</p>
          <input
            type="range"
            min="4"
            max="50"
            defaultValue={passwordLength}
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
                  disabled={hasUppercase && countConditionals() === 1}
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
                  disabled={hasLowercase && countConditionals() === 1}
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
                  disabled={hasNumbers && countConditionals() === 1}
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
                  disabled={hasSymbols && countConditionals() === 1}
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
