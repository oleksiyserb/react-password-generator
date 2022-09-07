import { useState } from "react";

import Panel from "./components/Panel";
import CustomizePassword from "./components/CustomizePassword";
import Fortress from "./components/icons/Fortress";
import Home from "./components/icons/Home";
import Tent from "./components/icons/Tent";
import classes from "./App.module.css";
import useRandomGenerate from "./hooks/useRandomGenerate";
import Settings from "./models/settings";

interface Functions {
  number: () => string;
  uppercase: () => string;
  lowercase: () => string;
  symbol: () => string;
}

const App: React.FC = () => {
  const randomFunctions: Functions = useRandomGenerate();

  const [finalPassword, setFinalPassword] = useState<string>(
    "j8329fj3ojreslaf@!jfels@JFHI#$"
  );

  const generateRandomPassword = (customSettings: Settings, length: number) => {
    let generatedPassword = "";
    const settings = [
      { uppercase: customSettings.uppercase },
      { lowercase: customSettings.lowercase },
      { number: customSettings.numbers },
      { symbol: customSettings.symbols },
    ].filter((item) => Object.values(item)[0]);

    if (settings.length === 0) {
      return "";
    }

    const functionNames = settings.map((item) => {
      return Object.keys(item)[0];
    });

    for (let i = 0; i < length; i++) {
      generatedPassword +=
        randomFunctions[
          functionNames[
            Math.floor(Math.random() * functionNames.length)
          ] as keyof Functions
        ]();
    }

    return generatedPassword
      .split("")
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .join("");
  };

  const generatePasswordHandler = (settings: Settings, length: number) => {
    const randomPassword = generateRandomPassword(settings, length);

    setFinalPassword(randomPassword);
  };

  return (
    <section className={classes.generator}>
      <div className={classes.title}>
        <h1>Password Generator</h1>
        <p>Generate your own password</p>
      </div>
      <Panel password={finalPassword} />
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          {finalPassword.length <= 8 && <Tent />}
          {finalPassword.length > 8 && finalPassword.length <= 16 && <Home />}
          {finalPassword.length > 16 && <Fortress />}
        </div>
        <CustomizePassword onGeneratePassword={generatePasswordHandler} />
      </div>
    </section>
  );
};

export default App;
