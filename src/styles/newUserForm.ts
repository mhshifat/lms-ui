import DatePicker from "react-datepicker";
import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.form`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemLabel = styled.div`
  flex-basis: 15rem;
  text-align: right;
  padding: 0 2rem;
  color: ${theme.color.secondary + "c7"};
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ItemInput = styled.div`
  flex: 1;
`;

export const DatePickerWithStyle = styled(DatePicker)`
  width: 40rem;
  height: 5rem;
  margin: 2rem 0;
  display: flex;
  background-color: ${theme.color.bg};
  border: 1px solid ${theme.color.tertiary + "5c"};
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 0 2rem;
  font-family: ${theme.fontFamily || "sans-serif"};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${theme.color.secondary}de;
`;
