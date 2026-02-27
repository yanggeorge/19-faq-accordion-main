import "./App.css";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useAtom } from "jotai";

import IconMinus from "@/assets/icons/icon-minus.svg?react";
import IconPlus from "@/assets/icons/icon-plus.svg?react";
import IconStar from "@/assets/icons/icon-star.svg?react";

import { scoreAtom } from "./atoms";
import { frontendMentorFAQs } from "./data/faqs";
import JotaiDevTools from "./utils/jotai-devtools";

function App() {
  const [score, _] = useAtom(scoreAtom);
  console.log("🚀 ~ App.tsx:11 ~ App ~ score:", score);
  return (
    <>
      <JotaiDevTools />
      <main className="flex-1 grid place-items-center bg-black">
        <div className="w-81.75 p-6 flex flex-col gap-6 bg-white rounded-2xl">
          <div className="flex gap-6 items-center">
            <IconStar class="w-6 h-6" />
            <h1 className="text-purple-950 typography-p4">FAQs</h1>
          </div>
          <div className="flex flex-col gap-12">
            {frontendMentorFAQs.items.map((item, index) => {
              return (
                <Disclosure
                  as="div"
                  defaultOpen={index === 0 && true}
                  className="flex flex-col gap-6"
                  key={index}
                >
                  {({ open }) => {
                    return (
                      <>
                        <DisclosureButton
                          as="div"
                          className="flex gap-6 cursor-pointer justify-between items-center"
                        >
                          <h2 className="typography-p5 text-purple-950">
                            {item.question}
                          </h2>
                          {open ? (
                            <IconMinus class="shrink-0" />
                          ) : (
                            <IconPlus class="shrink-0" />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel
                          as="p"
                          className="typography-p6 text-purple-600"
                        >
                          {item.answer}
                        </DisclosurePanel>
                      </>
                    );
                  }}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
