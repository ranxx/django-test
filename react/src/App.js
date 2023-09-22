import Header from "./components/header";
// import Footer from "./components/footer";
import Home from "./views/Home";
import "./app.scss";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
