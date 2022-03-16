
import CreateTodo from './components/CreateTodo'
import React,{ useState,useEffect } from 'react';
import { TodoList } from './components/TodoList';
import Grid from '@material-ui/core/Grid';
import Styled from 'styled-components'
import  GlobalStyles  from './components/GlobalStyle';

function App() {

  //states
  const [textInput,setTextInput] = useState("");
  const [todos,createTodo] = useState([])

  //useEffect
  useEffect(()=>{
    console.log(textInput)
  },[textInput])


  return (
   <div>
      <GlobalStyles/>

      <Grid container justifyContent="center">
      <Grid item xs={6} >
      <StyledApp>
        <h1>My Todo List</h1>
        </StyledApp>
      </Grid>
      </Grid>

      <Grid container justifyContent="center">
      <Grid item xs={6}>
      <StyledTodos>
      <TodoList todos={todos} createTodo={createTodo}/>
      </StyledTodos>
      </Grid>
      </Grid>

      <Grid container justifyContent="center">
      <Grid item xs={6}>
      <StyledInput>
      <CreateTodo textInput={textInput} setTextInput={setTextInput} todos={todos} createTodo={createTodo}/>
      </StyledInput>
      </Grid>
      </Grid>
   </div>

  );
}
const StyledApp=Styled.div `
text-align: center;
h1{
  font-family: 'Luxurious Roman', cursive;
  font-size:5em;
  color: #B8405E
}
`
const StyledInput= Styled.div`
  
`

const StyledTodos = Styled.div`
  
`
export default App;
