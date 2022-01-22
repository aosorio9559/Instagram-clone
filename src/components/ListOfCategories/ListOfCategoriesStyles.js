import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/Animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn({ time: "2s", type: "ease-in-out" })};
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        top: -20px;
        right: 0;
        left: 0;
        transform: scale(0.5);
        z-index: 1;
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
