import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  //color와 달리 backgroundColor은 styled-components의 내장 타입이 없어서 따로 지정해 줘야 함.
  // 그런데 막상 List.tsx에서 color prop을 넘겨주려니까 타입 안 정해줬다고 때서서 지정해줬다.
  // 뒤에 ? 가 붙는 이유는 props를 안 내려줘도 문제가 발생하지 않게 하려고 그런대.
  backgroundColor?: string;
  color?: string;
  size?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Buttons = () => {
  return <div>Buttons</div>
}

export default Buttons

export const ButtonCtn = ({ children, ...rest }: ButtonProps) => {
  return(
    <>
      <S.Button { ...rest }>{children}</S.Button>
    </>
  )
}

const S = {
  Button: styled.button<ButtonProps>`
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 20px;

    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    margin: 5px;
    ${({ size }) => {
      switch (size) {
        case "large":
          return css`
          width: 200px;
          height: 50px;
          `
        case "medium":
          return css`
          width: 150px;
          height: 40px;
          `
        case "small":
          return css`
          width: 100px;
          height: 30px;
          `
        default:
          break;
      }
    }}
  `
}