import "./App.css";

import { useAtom } from "jotai";

import { scoreAtom } from "./atoms";
import JotaiDevTools from "./utils/jotai-devtools";

function App() {
  const [score, _] = useAtom(scoreAtom);
  console.log("🚀 ~ App.tsx:11 ~ App ~ score:", score);
  return (
    <>
      <JotaiDevTools />
      <main className="flex-1 grid place-items-center bg-black"></main>
    </>
  );
}

export default App;
