import { useEffect, useState } from "react";

export default function useTypedText(text, delay) {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    const nextTypedTitle = text.slice(0, typedTitle.length + 1);

    if (nextTypedTitle === typedTitle) return;

    const timeout = setTimeout(() => {
      setTypedTitle(text.slice(0, typedTitle.length + 1));
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, text, typedTitle]);

  return typedTitle;
}
