import { useState, useEffect, useCallback, useMemo } from "react";

import Panel from "./components/Panel";
import CustomizePassword from "./components/CustomizePassword";
import Fortress from "./components/icons/Fortress";
import Home from "./components/icons/Home";
import Tent from "./components/icons/Tent";
import classes from "./App.module.css";
import Settings from "./models/settings";

interface Functions {
  number: () => string;
  uppercase: () => string;
  lowercase: () => string;
  symbol: () => string;
}

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomUppercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomLowercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * 20)];
};

const App: React.FC = () => {
  const randomFunctions = useMemo(
    () => ({
      lowercase: getRandomLowercase,
      uppercase: getRandomUppercase,
      number: getRandomNumber,
      symbol: getRandomSymbol,
    }),
    []
  );

  const [finalPassword, setFinalPassword] = useState<string>("");
  const [passwordSettings, setPasswordSettings] = useState<Settings>({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const [passwordLength, setPasswordLength] = useState<number>(8);

  const generateRandomPassword = useCallback(
    (length: number | null = null) => {
      let generatedPassword = "";
      const newLength = length ? length : passwordLength;

      const settings = [
        { uppercase: passwordSettings.uppercase },
        { lowercase: passwordSettings.lowercase },
        { number: passwordSettings.numbers },
        { symbol: passwordSettings.symbols },
      ].filter((item) => Object.values(item)[0]);

      if (settings.length === 0) {
        return "";
      }

      const functionNames = settings.map((item) => {
        return Object.keys(item)[0];
      });

      for (let i = 0; i <= newLength; i++) {
        generatedPassword +=
          randomFunctions[
            functionNames[
              Math.floor(Math.random() * functionNames.length)
            ] as keyof Functions
          ]();
      }

      const resultPassword = generatedPassword
        .split("")
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .join("");

      setFinalPassword(resultPassword);
    },
    [passwordSettings, passwordLength, randomFunctions]
  );

  const changeSettingsHandler = (setting: {
    key: string;
    isActive: boolean;
  }) => {
    setPasswordSettings((prevState) => {
      return {
        ...prevState,
        [setting.key]: setting.isActive,
      };
    });
  };

  const changeLengthHandler = (length: number) => {
    setPasswordLength(length);
  };

  useEffect(() => {
    generateRandomPassword();
  }, [generateRandomPassword]);

  return (
    <section className={classes.generator}>
      <div className={classes.title}>
        <h1>Password Generator</h1>
        <p>Generate your own password</p>
      </div>
      <Panel
        onRefresh={() => {
          generateRandomPassword();
        }}
        password={finalPassword}
      />
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          {finalPassword.length <= 8 && <Tent />}
          {finalPassword.length > 8 && finalPassword.length <= 16 && <Home />}
          {finalPassword.length > 16 && <Fortress />}
        </div>
        <CustomizePassword
          onChangeSettings={changeSettingsHandler}
          onChangeLength={changeLengthHandler}
          passwordSettings={passwordSettings}
          length={passwordLength}
          onGeneratePassword={() => {
            generateRandomPassword();
          }}
        />
      </div>
    </section>
  );
};

export default App;
