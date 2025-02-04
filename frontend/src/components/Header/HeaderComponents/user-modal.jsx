/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserModal({ className, isUserModalOpen }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loginNavigate = () => {
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <div
      className={clsx(
        "absolute right-0 z-[2] flex h-auto w-auto justify-center xs:w-2/3 rounded-lg bg-slate-500/60 px-8 py-4 xs:px-4 xs:py-2 backdrop-blur-sm transition-transform duration-500",
        className,
        isUserModalOpen ? "translate-y-10" : "-translate-y-96",
      )}
    >
      {user ? (
        <div className="">
          <h2 className="text-xl xs:text-base  text-white"><span className="font-bold text-black">Name: </span>{user.name}</h2>
          <p className="text-xl xs:text-base  text-white">
            <span className="font-bold text-black">Email:</span> {user.email}
          </p>
          <button
            onClick={handleLogout}
            className="mt-3 font-semibold w-full xs:text-sm rounded-md bg-red-500 p-2 xs:p-1 text-white"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xl xs:text-center xs:text-base text-white">
          You are <span className="font-bold text-red-500">not</span> logged in
          </p>
          <button
          className="mt-3 font-semibold xs:text-sm w-full rounded-md bg-blue-950 p-2 xs:p-1 text-white"
          onClick={loginNavigate}>Login</button>
        </div>
      )}
    </div>
  );
}
