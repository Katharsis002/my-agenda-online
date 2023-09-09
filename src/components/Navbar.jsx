import React, { useState } from "react";
import { FaCalendar, FaEnvelope, FaPen, FaUser } from "react-icons/fa";
import Note from "./Note";

function Navbar() {
  const [noteVisible, setNoteVisible] = useState(false);

  const handleFaPenClick = () => {
    setNoteVisible(!noteVisible);
  };

  return (
    <>
      <section className="mx-auto bg-[--blue] py-7">
        <div className="flex justify-around items-center">
          <div className="text-white">Logo</div>
          <div className="flex gap-6">
            <FaCalendar className="icon text-3xl text-white" />
            <FaEnvelope className="icon text-3xl text-white" />
            <FaPen
              id="FaPen"
              className="icon text-3xl text-white cursor-pointer"
              onClick={handleFaPenClick}
            />
            <FaUser className="icon text-3xl text-white" />
          </div>
        </div>
      </section>

      {/* Passa lo stato noteVisible al componente Note */}
      <Note isOpen={noteVisible} />
    </>
  );
}

export default Navbar;
