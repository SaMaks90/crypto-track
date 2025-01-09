import { JSX } from "react";
import styled from "styled-components";
import useTheme from "../hooks/useTheme";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 40px;
  height: 14px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 4px;
  border-radius: 50%;
  transition: transform 0.2s linear;

  ${Input}:checked + ${Label} & {
    transform: translateX(24px);
  }
`;

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

  console.log(isDark);

  return (
    <>
      <Section>
        <Input
          type={"checkbox"}
          checked={isDark}
          onChange={toggleDarkTheme}
          id={"dark-mode"}
        />
        <Label htmlFor={"dark-mode"}>
          <BsMoonStarsFill color={"white"} />
          <BsFillSunFill color={"yellow"} />
          <Ball />
        </Label>
      </Section>
    </>
  );
};

export default DarkModeToggleSwitch;
