import React from 'react'
import Input from '../components/Input'
import List from '../components/List'

const Home = () => {
  return (
    <>
    <Input/>
    <List listIsDone={false}/>
    <List listIsDone={true}/>
    </>
  )
}

export default Home