/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { UiButtons } from "../../../components/uikit/ui-buttons";
import { useEffect, useState } from "react";
import axios from "axios";

export function AboutProductComponent({ className }) {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0)
    setCount(1)
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleUp = () => {
    setCount((lastCount) => lastCount + 1);
    if (count >= 10) {
      setCount(10);
    }
  };
  const handleDown = () => {
    setCount((lastCount) => lastCount - 1);
    if (count <= 1) {
      setCount(1);
    }
  };
  const handleAddCartClick = () => {
    setCount(1);
  };

  return (
    <section className={clsx(className, "")}>
      {data && (
        <div className="font-DMSans grid grid-cols-2 mobile:grid-cols-1 font-normal text-[#2A254B] ">
          <div className="max-h-[760px]">
            <img
              className="h-full w-full object-cover"
              src={`http://localhost:5001/${data.img}`}
              alt={data.title || "Product Image"}
            />
          </div>
          <div className="flex flex-col items-center justify-center py-20 px-10 ">
            <h1 className="self-start text-4xl">{data.title}</h1>
            <p className="mt-4 self-start text-2xl text-black">£ {data.cost}</p>
            <h3 className="mt-14 self-start text-lg font-medium">
              Description
            </h3>
            <p className="mt-4 text-base">{data.description}</p>
            <h3 className="mt-7 self-start text-lg font-medium">Dimensions</h3>
            <div className="flex self-start">
              <div className="mt-7 flex gap-14">
                <div className="flex flex-col text-sm">
                  <h3>Height</h3>
                  <p className="mt-3 text-base">{data.dimensions.height}</p>
                </div>
                <div className="flex flex-col">
                  <h3>Width</h3>
                  <p className="mt-3 text-base">{data.dimensions.width}</p>
                </div>
                <div className="flex flex-col">
                  <h3>Depth</h3>
                  <p className="mt-3 text-base">{data.dimensions.depth}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center self-start">
              <div className="flex items-center justify-center flex-col">
                <h3 className="mr-8 text-base self-start">Amount</h3>
                <div className="flex gap-5 text-base mt-8 self-start">
                  <button
                    onClick={handleDown}
                    className="h-10 w-10 rounded-full border border-[#2A254B] font-semibold transition-colors hover:bg-[#2A254B]/20"
                  >
                    -
                  </button>
                  <p className="flex items-center justify-center">{count}</p>
                  <button
                    onClick={handleUp}
                    className="h-10 w-10 rounded-full border border-[#2A254B] font-semibold transition-colors hover:bg-[#2A254B]/20"
                  >
                    +
                  </button>
                </div>
                <UiButtons
                  onClick={handleAddCartClick}
                  className="mt-8 self-start"
                  size="md"
                  color="darkBlue"
                >
                  Add to cart
                </UiButtons>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
