import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Profile";
import Profile from "./pages/Profile";

function App() {
  const data = [{ id: 1, name: "belgee", age: "15" }];
  // const dataa = [{ id: 2, name: "sodbolor", age: "22" }];
  // const dataaa = [{ id: 3, name: "bata", age: "33" }];
  // const dataaaa = [{ id: 4, name: "nomio", age: "44" }];

  return (
    <BrowserRouter>
      <Header ain={data}>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
