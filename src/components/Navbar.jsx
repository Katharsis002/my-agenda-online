import React from "react";
import { FaCalendar, FaEnvelope, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className=" mx-auto bg-[--blue] py-7">
      <div className="flex justify-around items-center ">
        <div className="text-white">Logo</div>
        <div className="flex gap-6">
          <FaCalendar className="icon text-3xl text-white" />
          <FaEnvelope className="icon text-3xl text-white" />
          <FaUser className="icon text-3xl text-white" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
