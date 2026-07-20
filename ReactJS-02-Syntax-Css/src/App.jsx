import "./App.css";

const App = () => {
  const myName = "Mubashir";
  const myAge = 24;
  const canDrive = myAge >= 18;

  return (
    <div className="app">
      <div className="card">
        <h1>ReactJS Syntax & CSS</h1>

        <p>This is a paragraph.</p>

        {/* This is JSX expression */}
        <p>Name: <span>{myName.toUpperCase()}</span></p>

        {/* This is JSX expression */}
        <p>Age: <span>{myAge}</span></p>

        
        <p>
          Can drive: <span>{canDrive ? "Yes" : "No"}</span>
        </p>

        <img
          src="/images/pexels-antonio-batinic.jpg"
          alt="Placeholder"
          className="media"
        />

        <video
          src="/videos/sample-video.mp4"
          autoPlay
          controls
          loop
          muted
          className="media"
        />
      </div>
    </div>
  );
};

export default App;