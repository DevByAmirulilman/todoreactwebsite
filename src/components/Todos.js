import React from 'react'
import Styled from 'styled-components'
import { ReactComponent as Deleteicon } from '../assets/dumpstericon.svg';

export const Todos = ({todo,todos,createTodo}) => {

    const completeHandler = () =>{
        createTodo(todos.filter(state=>state.id !== todo.id))
    }

    

  return (
    <StyledTodos>
      <h2>{todo.message}</h2>
     <div>
       <Deleteicon onClick={completeHandler}/>
      <h3>Date: {todo.date}</h3>
      </div>
    </StyledTodos>
  )
}

const StyledTodos = Styled.div`
  display:flex;
  justify-content:space-between;
  background-color:#EEE6CE;
  padding:1em;
  margin-top:2em;
  margin-bottom:1em;
  svg{ 
    width:5em;
    cursor:pointer;
  }
`
export default Todos;