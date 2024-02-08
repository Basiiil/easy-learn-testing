import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { CodeBlock, dracula } from "react-code-blocks";
import { Suspense, useEffect, useState } from "react";
import { routes } from "./routes/routes";

function App() {
  const [path,setPath] = useState();
  const location = useLocation()
  useEffect(()=>{
    setPath(location.pathname)
  },[location])
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar path={path} />
        <div className="content">
          <CodeBlock
            text={"console.log()"}
            language="javascript"
            showLineNumbers={true}
            theme={dracula}
          />
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <>
                {routes?.map((route) => (
                  <Route
                    path={route.path}
                    key={route.name}
                    element={<route.component />}
                  />
                ))}
              </>
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
