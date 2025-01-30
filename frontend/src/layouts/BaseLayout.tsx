import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HeaderStyled,
  LinkStyled,
  MainStyled,
  NavStyled,
} from "../styles/baseLayout";
import { RootState } from "../stores/store";
import DarkModeToggleSwitch from "../components/darkModeToggleSwitch/DarkModeToggleSwitch";

const BaseLayout = () => {
  const { authToken } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <HeaderStyled>
        <section>
          <DarkModeToggleSwitch />
        </section>
        <NavStyled>
          <LinkStyled to={"/"}>Home</LinkStyled>
          {!authToken && <LinkStyled to={"/login"}>Login</LinkStyled>}
          {!authToken && (
            <LinkStyled to={"/registration"}>Registration</LinkStyled>
          )}
          {authToken && <LinkStyled to={"/dashboard"}>Dashboard</LinkStyled>}
          {authToken && <LinkStyled to={"/profile"}>Profile</LinkStyled>}
          {authToken && <LinkStyled to={"/logout"}>Log Out</LinkStyled>}
        </NavStyled>
      </HeaderStyled>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </>
  );
};

export default BaseLayout;
