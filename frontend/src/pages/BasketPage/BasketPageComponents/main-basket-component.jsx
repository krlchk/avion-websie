/* eslint-disable react/prop-types */
import clsx from "clsx";
import { UnitComponent } from "../../../components/ReusedComponents";
import { useCart } from "./cart-context";
import { UiButtons } from "../../../components/uikit";

export function MainBusketComponent({ className }) {
  const { basketData, clearBasket } = useCart();

  const subtotal = basketData.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0,
  );

  return (
    <section
      className={clsx(className, "font-DMSans font-normal text-[#2A254B]")}
    >
      <div>
        <h1 className="text-4xl mobile:text-2xl">Your shopping cart</h1>
        <div className="mt-12 flex h-auto w-full flex-col gap-5">
          <div className="text-md grid w-full grid-cols-5 px-3 font-bold mobile:grid-cols-1">
            <p className="col-span-3">Product</p>
            <p className="mobile:hidden">Quantity</p>
            <p className="mobile:hidden">Total</p>
          </div>

          <div>
            {basketData.length === 0 ? (
              <p className="mt-10 text-center text-xl">Your cart is empty 🛒</p>
            ) : (
              basketData.map((unit) => <BasketUnit key={unit.id} {...unit} />)
            )}
          </div>
        </div>
      </div>
      <div className="mt-7 flex text-xl text-[#4E4D93]">
        <h1 className="mr-4">Subtotal:</h1>
        <p className="text-black">£{subtotal.toFixed(2)}</p>
      </div>
      <p className="mt-4 text-sm text-[#4E4D93]">
        Taxes and shipping are calculated at checkout
      </p>
      <UiButtons
        className="mt-4"
        onClick={clearBasket}
        size="md"
        color="darkBlue"
      >
        Go to checkout
      </UiButtons>
      <UiButtons
        className="mt-4"
        onClick={clearBasket}
        size="md"
        color="lightBlue"
      >
        Clear basket
      </UiButtons>
    </section>
  );
}

function BasketUnit({ id, img, title, quantity, cost }) {
  const imageUrl = `http://localhost:5001/${img}`;
  return (
    <div className="text-md mb-10 grid w-full grid-cols-5 px-3 mobile:grid-cols-2">
      <UnitComponent
        id={id}
        image={imageUrl}
        title={title}
        cost={cost}
        unitParamsClassName="mt-0"
        unitImageClassName="h-[140px] w-[110px] tablet:h-[140px] mobile:h-[140px]"
        className="col-span-3 flex h-[140px] w-full mobile:justify-around"
      />
      <p className="font-bold mobile:mt-5 mobile:text-center">{quantity}</p>
      <p className="font-bold mobile:mt-5 mobile:text-center">
        {quantity * cost}
      </p>
    </div>
  );
}
