import "./App.css";
import Form from "./components/Form";
import Socials from "./components/Socials";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="container">
      <Topbar />
      <Form />
      <img
        src="images/illustration-dashboard.png"
        className="illustration"
        alt="dashboard"
      />
      <Socials />
    </div>
  );
}

export default App;
