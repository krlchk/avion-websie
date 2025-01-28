/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export function UnitComponent({ className, id, image, title, cost }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className={clsx(
        className,
        "cursor-pointer text-xl transition-colors text-[#2A254B] hover:text-[#2A254B]/70",
      )}
    >
      <div className="h-[400px] w-full overflow-hidden tablet:h-[350px] mobile:h-[300px]">
        <img className="h-full w-full object-cover" src={image} alt="image" />
      </div>
      <p className="mt-6 mobile:text-base">{title}</p>
      <p className="mt-2 mobile:text-base">£{cost}</p>
    </div>
  );
}
