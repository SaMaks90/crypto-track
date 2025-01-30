import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background: ${(props) => props.theme.backgrounds.header};
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[2]};
  height: ${({ theme }) => theme.heights.baseHeader};
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const LinkStyled = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const MainStyled = styled.main`
  width: ${({ theme }) => theme.widths.full};

  min-height: calc(
    ${({ theme }) => theme.heights.screen} -
      ${({ theme }) => theme.heights.baseHeader}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
