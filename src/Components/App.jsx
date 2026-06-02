import { useState } from "react";
import "./App.css";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <Heading />
      <Form setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}
