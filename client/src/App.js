import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Main from "./views/Main";
import Create from "./views/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/project/new"
          element={
            <Layout>
              <Create />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
