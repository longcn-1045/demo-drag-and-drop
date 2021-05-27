import React from "react"
import styled from 'styled-components';

const Container = styled.div `
  margin: 8px 0;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
`;

const Task = (props) => {
  const {task} = props

  return (
    <Container>
      {task.content}
    </Container>
  )
}

export default Task
