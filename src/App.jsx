import Panel from "./components/Panel";
import CustomizePassword from "./components/CustomizePassword";
import Fortress from "./components/icons/Fortress";
import classes from "./App.module.css";

const App = () => {
  return (
    <section className={classes.generator}>
      <div className={classes.title}>
        <h1>Password Generator</h1>
        <p>Generate your own password</p>
      </div>
      <Panel />
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          <Fortress />
        </div>
        <CustomizePassword />
      </div>
    </section>
  );
};

export default App;
