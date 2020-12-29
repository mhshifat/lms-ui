import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      background-color: transparent;
    }
  }

  th,
  td {
    border: 1px solid #dddddd5e;
    padding: 10px;
    text-align: center;
    color: ${theme.color.secondary + "c7"};
  }

  tr:nth-child(even) {
    background-color: #f1f1f1;
  }

  @media (max-width: 791px) {
    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 1rem;

      &:nth-child(even) {
        background-color: transparent;
      }
    }

    td {
      display: block;
      text-align: right;
      position: relative;
      padding-left: 130px;

      &::before {
        content: attr(data-heading);
        position: absolute;
        top: 0;
        left: 0;
        width: 120px;
        height: 100%;
        background-color: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const TableActions = styled.div`
  width: 100%;
  height: 100%;

  svg {
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: ${theme.color.primary};
    }
  }
`;

export const TableImg = styled.img`
  height: 5rem;
`;
