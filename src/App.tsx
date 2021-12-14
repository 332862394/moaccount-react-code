import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "components/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/" element={<Navigate to="/money" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
function NoMatch() {
  return <div>页面不存在</div>;
}
function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

export default App;
