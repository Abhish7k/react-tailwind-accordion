import "./App.css";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-400 to-blue-600">
      {/* <h1>React Accordion</h1> */}
      <div className="p-4">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
