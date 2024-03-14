import React from "react";
import { v4 as uuidv4 } from "uuid";
import TableComp from "../../Components/Table/Table";
import { Link } from "react-router-dom";
import { PlusOneOutlined, AddCircle } from "@mui/icons-material";

const items = [
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
  },
];
const Products = () => {
  return (
    <div className="p-20 min-h-[100vh] bg-red-300">
      <div className="flex-center gap-10 mb-10">
        <h1 className=" text-4xl text-center ">Products </h1>
        <Link
          className=" border border-white p-3 rounded-lg"
          to={"/add/product"}
        >
          {" "}
          Add product <AddCircle className="mb-1" htmlColor="white" />
        </Link>
      </div>
      <div className="flex-center">
        <TableComp />
      </div>
    </div>
  );
};

export default Products;
