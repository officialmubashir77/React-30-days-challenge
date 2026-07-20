import './App.css';
import CssPattern from './pages/CssPattern';

const App = () => {
  const myName = "Mubashir";

  console.log("Hello, " + myName + "!");

  const handleGetTime = ( e ) => {
    // const currentTime = new Date().toLocaleString();
    // alert("Current Time: " + currentTime);

    const message = e || "No message provided";
    alert(message);
  }

  return (

    // Rendering the CssPattern component to display the CSS layout pattern
    // <CssPattern />

    <div
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#222222",
            marginBottom: "15px",
          }}
        >
          React Event Functions
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555555",
            marginBottom: "25px",
          }}
        >
          Hello, {myName}!
        </p>

        <button
          style={{
            backgroundColor: "#de253a",
            color: "#ffffff",
            border: "none",
            padding: "12px 28px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}

          // onClick={ () => alert("Hello Alert") }

          // onClick={ handleGetTime }

          // Agar hamen call karty waqt function ko parameter pass karna ho to hum arrow function ka use karte hain.
          onClick={ () => handleGetTime("Hello Alert From Function Call") }
        >
          TEST
        </button>
      </div>
    </div>
  );
};

export default App;