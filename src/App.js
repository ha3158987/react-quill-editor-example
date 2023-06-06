import "./App.css";
import Editor from "./Editor";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Quill Editor</header>
      <div style={{ padding: "20px" }}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
