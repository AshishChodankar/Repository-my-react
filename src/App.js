import { HelloWorld } from "./helloworld.js";
export default function App() {
  return (
    <div>
      <h1>hello app</h1>
      <HelloWorld></HelloWorld>
      <HelloUniverse></HelloUniverse>
    </div>
  );
}

export function HelloUniverse() {
  return (
    <div>
      <div>Hello Universe</div>
      <hr />
      <div>Hello Universe1</div>
    </div>
  );
}
