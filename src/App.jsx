import BreadCrum from "./Components/BreadCrum";
import Content from "./Components/Content";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div>
      <Header />
      <BreadCrum />

      <div className="container">
        <SideMenu />
        <Content />
      </div>
    </div>
  );
}

export default App;
