import styled from "styled-components";

export const ListCtn = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 1rem auto;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    background-color: #bebebe;
    padding: 1rem;
    color: white
  }

  section {
    border: 2px solid lightgreen;
    gap: 30px;
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;
  }
  p {
    margin: 1rem 0;
  }
`

export const GoToPage = styled.p`
  float: right;
  background-color: lightgreen;
  color: white;
  font-weight: bolder;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
`