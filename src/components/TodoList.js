import React from 'react'
import Todos from "./Todos"
import Styled from 'styled-components'

export const TodoList = ({todos,createTodo}) => {
  return (
    <StyledTodoList>
        {
            todos.map((todo) =>(
                <Todos key={todo.id} todo={todo} todos={todos} createTodo={createTodo}/>
            ))
        }
    </StyledTodoList>
  )
}

const StyledTodoList = Styled.div`

`
export default TodoList;