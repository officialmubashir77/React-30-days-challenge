import './App.css';
const App = () => {

  const name = "React";

  const product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    quantity: 5,
    color: "black",
  }

  const cars = ["BMW", "Audi", "Mercedes"];

  const placeholder = "Enter your name";
  const nameValue = "John Doe";

  const inlineCss = {
    color: "tomato",
    fontSize: "24px",
    fontWeight: "600",
    margin: "20px 0",
  };

  return (
    <div>
      <h1 >Hello, {name}!</h1>

      <h2 >This is a product: {JSON.stringify(product)}!</h2>

      <h2 >These are the cars: {cars.toString()}!</h2>

      <h2 >These are the cars: {cars.join(", ")}!</h2>

      <p>Today Date is {new Date().toLocaleDateString()}</p>

      <input type="text" placeholder={placeholder}  name={nameValue} />

      <p style={inlineCss}>This is an inline styled paragraph.</p>
    </div>
  );
}

export default App;