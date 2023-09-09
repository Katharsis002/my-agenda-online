import React, { useState, useEffect } from "react";

function Note() {
  const [isOpen, setIsOpen] = useState(false);

  // Funzione per aprire e chiudere il menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Aggiungi un event listener per aprire il menu quando FaPen viene cliccato
    const penButton = document.getElementById("FaPen");
    if (penButton) {
      penButton.addEventListener("click", toggleMenu);
    }

    // Pulizia dell'event listener quando il componente si smonta
    return () => {
      if (penButton) {
        penButton.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  // Aggiungi un event listener per impedire che il click si propaghi al documento
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isOpen) {
        e.stopPropagation();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Pulizia dell'event listener quando il componente si smonta
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 translate-x-0">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Menu</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Note;
