import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>This is shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
