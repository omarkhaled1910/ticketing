import React from 'react'
import { v4 as uuidv4 } from "uuid";
import TableComp from '../Components/Table/Table'

const items =[
    {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },
      {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },   {
        created: new Date().toDateString(),
        description: "quiz.description",
        id: uuidv4(),
        modified: new Date().toDateString(),
        questions: "quiz.questions",
        score: null,
        title: "quiz.title",
        url: "quiz.url",
      },
]
const Products = () => {
  return (
    <div className='p-10 bg-red-300'> 

        <h1 className=' text-4xl text-center mb-10'>Products </h1>
        <div className='flex-center'>

        <TableComp />
        </div>
    </div>
  )
}

export default Products