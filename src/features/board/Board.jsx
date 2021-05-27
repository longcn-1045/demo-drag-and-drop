import React from "react"
import Lists from "./../list/Lists"
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Board = (props) => {
  const {board} = props

  return (
    <div>
      <Title>{board.name}</Title>
      <Lists listIds={board.listIds}/>
    </div>
  )
}

export default Board
