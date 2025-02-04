/* eslint-disable react/prop-types */
import clsx from "clsx";
import { UiButtons } from "../uikit/ui-buttons";
import { useState } from "react";
import axios from "axios";

export function EmailComponent({ className, inputClassName, buttonColor }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    axios
      .post(
        "http://localhost:5001/api/send-email",
        { email },
        { headers: { "Content-Type": "application/json" } },
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setMessage("✅ Email sent successfully!");
        } else {
          setMessage(`❌ Error`);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("❌ Failed to send email.");
      });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className={clsx(className, "flex mobile:mt-10")}
        action=""
      >
        <input
          required
          placeholder="your@email.com"
          className={clsx(
            inputClassName,
            "w-96 px-6 placeholder:font-medium tablet:w-52 xs:w-44",
          )}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <UiButtons type="submit" className="mobile:px-4" color={buttonColor}>
          Sign up
        </UiButtons>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
