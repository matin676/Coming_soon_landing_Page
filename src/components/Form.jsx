import React from "react";

export default function Form() {
  const handleCheck = () => {
    const contactMessage = document.getElementById("message"),
      contactEmail = document.getElementById("email");

    const emailPattern = new RegExp(contactEmail.getAttribute("pattern"));

    if (!emailPattern.test(contactEmail.value) || contactEmail === "") {
      contactMessage.classList.add("invisible");
      contactEmail.classList.add("input");
      contactMessage.textContent = "Please provide a valid email address";
    } else {
      contactMessage.classList.add("invisible");
      contactEmail.classList.remove("input");
      contactMessage.textContent = "Hooray! You're subscribed";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form id="form" name="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="Your email address..."
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <button
          id="button"
          className="button"
          type="button"
          onClick={handleCheck}
        >
          Notify me
        </button>
      </form>
      <p id="message" className="message">
        <em></em>
      </p>
    </>
  );
}
