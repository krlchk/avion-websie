/* eslint-disable react/prop-types */
import clsx from "clsx";
import { UiButtons } from "../uikit/ui-buttons";

export function EmailComponent({ className, inputClassName, buttonColor }) {
  return (
    <form className={clsx(className, "flex mobile:mt-10")} action="">
      <input
        placeholder="your@email.com"
        className={clsx(
          inputClassName,
          "w-96 px-6 placeholder:font-medium tablet:w-52 xs:w-44",
        )}
        type="text"
      />
      <UiButtons className="mobile:px-4" color={buttonColor}>
        Sign up
      </UiButtons>
    </form>
  );
}
