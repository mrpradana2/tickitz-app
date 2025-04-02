import { useState } from "react";

export default function openDetails(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  function handlerOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return { isOpen, handlerOpen };
}
