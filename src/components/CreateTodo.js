import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import Styled from 'styled-components'

export const CreateTodo = ({textInput,setTextInput,todos,createTodo}) => {

    //INPUT FUNCTION
    const inputHandler =(e)=>{
        setTextInput(e.target.value);
    }
    //SUBMIT FUNCTION
    const submitHandler = (e)=>{
        e.preventDefault();
        createTodo([...todos,{message:textInput,id:uuidv4(),date:date}])
        setTextInput("")
    } 

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


  return (
    <StyledForm>
    <form onSubmit={submitHandler}>
        <textarea value={textInput} onChange={inputHandler}></textarea>
        <button>Submit</button>
    </form>
    </StyledForm>
  )
}

  const StyledForm = Styled.div`
  text-align: center;
  form{
    display:flex;
  }
  button{
    padding:1.5em;
  }
  textarea {
    height:4em;
    width: 80%;
    background-color:#EEE6CE;
  }
  `
export default CreateTodo;