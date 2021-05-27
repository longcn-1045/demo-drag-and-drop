import React from "react"
import Tasks from './../task/Tasks';
import styled from 'styled-components';

const Container = styled.div `
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
`;

const List = (props) => {
  const {list} = props

  return (
    <Container>
      <h3>{list.title}</h3>
      <Tasks taskIds={list.taskIds}/>
    </Container>
  )
}

export default List
