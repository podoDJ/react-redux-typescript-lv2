import React, { useState, useRef } from 'react'
import shortid from "shortid"
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/modules/todos'
import { ButtonCtn } from './common/Buttons'
import { InputCtn } from './InputStyle'
const Input = () => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const isDone: boolean = false
  const focusRef = useRef<HTMLInputElement>(null);

  //dispatch의 반환값은 action이므로 void로 타입을 정하는 것이 아닌 Action을 정해주어야 한다.
  const dispatch = useDispatch()

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleContentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }
  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title.trim() === "") {
      alert("제목은 입력해주세요. 스페이스만 쳐도 안 됩니다.")
      return false
    } else {
      dispatch(
        addTodo({
        id: shortid.generate(),
        title,
        content,
        isDone,
      })
      )
      setTitle('')
      setContent('')
      if (focusRef.current) {
        focusRef.current.focus();
      }
    }
  }
  
  return (
    <>
    <InputCtn onSubmit={handleInputSubmit}>
      <div>
      <label>할 일</label>
      <input value={title} onChange={handleTitleInput} ref={focusRef} />
      </div>
      <div>
      <label>내용</label>
      <input value={content} onChange={handleContentInput}/>
      </div>
      <ButtonCtn backgroundColor="white" color="lightgreen" size="medium">등록</ButtonCtn>
    </InputCtn>
    </>
    
  )
}

export default Input