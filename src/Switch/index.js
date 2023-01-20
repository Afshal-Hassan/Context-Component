import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { value } = useTheme();
  const [ theme, toggleTheme ] = value;
  return (
    <label className="switch">
      <input
        type="checkbox"
        onClick= { () => toggleTheme() }
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
