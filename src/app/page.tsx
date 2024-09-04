"use client";

import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState("");

  const textToClipboard = () => {
    const clipboardText = new ClipboardItem({
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    navigator.clipboard
      .write([clipboardText])
      .then(() => {
        console.log("Text erfolgreich in die Zwischenablage geschrieben!");
      })
      .catch((err) => {
        console.error("Fehler beim Schreiben in die Zwischenablage: ", err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="clipboard"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Clipboard Text
          </label>
          <div className="mt-2">
            <input
              id="clipboard"
              name="clipboard"
              type="text"
              placeholder="Example text"
              onInput={(e) => setText(e.currentTarget.value)}
              className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          onClick={textToClipboard}
          className="rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
        >
          Click me
        </button>
      </div>
    </main>
  );
}
