import { JSX } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";
import {
  SectionStyled,
  LabelStyled,
  InputStyled,
  BallStyled,
} from "./darkModeToggleSwitchStyled";

/**
 * Dark mode <-> light mode toggle switch
 * Update cookie value and global state
 *
 * @return {*} JSX.Element
 */
const DarkModeToggleSwitch = (): JSX.Element => {
  const { setTheme, getCurrentThemeState } = useTheme();
  const currentTheme = getCurrentThemeState();
  const isDark = currentTheme.theme === "dark";
  const toggleDarkTheme = () => {
    isDark ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <SectionStyled>
        <InputStyled
          type={"checkbox"}
          checked={isDark}
          onChange={toggleDarkTheme}
          id={"dark-mode"}
        />
        <LabelStyled htmlFor={"dark-mode"}>
          <BsMoonStarsFill color={"white"} />
          <BsFillSunFill color={"yellow"} />
          <BallStyled />
        </LabelStyled>
      </SectionStyled>
    </>
  );
};

export default DarkModeToggleSwitch;
