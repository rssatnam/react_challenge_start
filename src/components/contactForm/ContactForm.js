import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const changeHandler = ({ target }) => {
    const targetName = target.name;
    const targetValue = target.value;
    if (targetName === "name") {
      setName(targetValue);
    }
    if (targetName === "phone") {
      setPhone(targetValue);
    }
    if (targetName === "email") {
      setEmail(targetValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={changeHandler}
        name="name"
        placeholder="Name"
        required="required"
      />
      <input
        type="tel"
        value={phone}
        onChange={changeHandler}
        name="phone"
        placeholder="Phone (10-digits Number)"
        pattern="^\d{10}$"
        required="required"
      />
      <input
        type="email"
        value={email}
        onChange={changeHandler}
        name="email"
        placeholder="Email"
        required="required"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
