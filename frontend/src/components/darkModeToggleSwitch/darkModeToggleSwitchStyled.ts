import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
`;

export const InputStyled = styled.input`
  display: none;
`;

export const LabelStyled = styled.label`
  background-color: ${({ theme }) => theme.backgrounds.themeModeSwitch};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radii.fifty};
  padding: ${({ theme }) => theme.spacing[0]};
  gap: ${({ theme }) => theme.spacing[1]};
  position: relative;
  cursor: pointer;
`;

export const BallStyled = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.backgrounds.themeModeBall};
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: transform 0.2s linear;

  ${InputStyled}:checked + ${LabelStyled} & {
    transform: translateX(22px);
  }
`;
