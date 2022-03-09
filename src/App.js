import "./App.css";

import React, { useCallback, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./compoment/Home";
import About from "./compoment/About";
import styled from "styled-components";
import NewsList from "./compoment/newsCompoment/NewsList";
import Categories from "./compoment/newsCompoment/Categories";
import ColorBox from "./compoment/colors/ColorBox";
import { ColorProvider } from "./context/color";
import ColerSelector from "./compoment/colors/ColerSelector";

import CountContainer from "./container/CountContainer";
import TodosContainer from "./container/TodosContainer";
import SampleContainer from "./container/SampleContainer";

const AppStyle = styled.div``;

function App() {
  const [category, setCategory] = useState("all");

  const handleSelect = useCallback((category) => setCategory(category), []);

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     const parsedTodos = JSON.parse(savedTodos);
  //     setTodos(parsedTodos);
  //   }
  // }, []);

  //  useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //  }, [todos]);

  return (
    <div>
      {/* <ul>
        <li>
          <Link to="/">홈</Link>
        </li>

        <li>
          {" "}
          <Link to="/todolist">todolist</Link>
        </li>
        <li>
          <Link to="/news">New List</Link>
        </li>
        <li>
          <Link to="/sample">가짜 포스트 목록</Link>
        </li>
        <li>
          <ColorProvider value={{ color: "black" }}>
            <ColorBox />
            <ColerSelector />
          </ColorProvider>
        </li>
      </ul>
      카운트 */}

      <AppStyle>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<TodosContainer />} />
          <Route
            path="/news"
            element={
              <div>
                <Categories category={category} handleSelect={handleSelect} />
                <NewsList category={category} />
              </div>
            }
          />
          <Route path="/sample" element={<SampleContainer />} />
        </Routes>
      </AppStyle>
    </div>
  );
}

export default App;
