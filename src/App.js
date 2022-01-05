export default function App() {
  return (
    <div className="container-fluid">
      <header />
      <h1>Hello</h1>
      <MyCard />
    </div>
  );
}

function header() {
  return (
    <div className="row bg-dark text-light">
      <div className="col">MyReact</div>;
    </div>
  );
}

function MyCard() {}
