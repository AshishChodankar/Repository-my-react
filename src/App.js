export default function App() {
  return (
    <div className="container-fluid">
      <div>Hello</div>
      <Header />
      <h1>Hello</h1>
      <MyCard />
    </div>
  );
}

function Header() {
  return (
    <div className="row bg-dark text-light">
      <div className="col">MyReact</div>;
    </div>
  );
}

function MyCard() {}
