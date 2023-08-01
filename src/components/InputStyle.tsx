import styled from "styled-components";

export const InputCtn = styled.form`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div > label {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  div > input {
    width: 20rem;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    padding-inline: 1rem;
    font-size: 1rem
  }
`