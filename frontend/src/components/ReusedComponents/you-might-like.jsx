/* eslint-disable react/prop-types */
import { UnitComponent } from "./unit-component";
import clsx from "clsx";
// import imageOne from "./you-might-like-images/image-one.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function YouMightLike({ className }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={clsx(className, "")}>
      <div className="flex flex-col font-DMSans font-normal text-[#2A254B]">
        <p className="flex justify-start self-start text-3xl">
          You might also like
        </p>
        <div className="mt-8 grid grid-cols-4 gap-5 tablet:gap-4 mobile:grid-cols-2">
          {data.slice(0, 4).map((item) => (
            <UnitComponent
              key={item.id}
              id={item.id}
              image={`http://localhost:5001/${item.img}`}
              title={item.title}
              cost={item.cost}
            />
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Link className="cursor-pointer text-base font-bold transition-colors hover:text-[#2A254B]/70">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
