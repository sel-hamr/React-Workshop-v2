"use client";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Input } from "../ui/input";

function ExampleReactUseLocalStorage() {
  const [name, setName] = useLocalStorage("name", "Guest");

  return (
    <div>
      <p>Name: {name}</p>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default ExampleReactUseLocalStorage;
