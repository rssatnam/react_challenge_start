import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const changeHandler = ({ target }) => {
    const targetName = target.name;
    const targetValue = target.value;
    if (targetName === "title") {
      setTitle(targetValue);
    }
    if (targetName === "date") {
      setDate(targetValue);
    }
    if (targetName === "time") {
      setTime(targetValue);
    }
    if (targetName === "contact") {
      setContact(targetValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={changeHandler}
        name="title"
        placeholder="Title"
        required="required"
      />
      <input
        type="date"
        value={date}
        onChange={changeHandler}
        name="date"
        placeholder="Date"
        required="required"
      />
      <input
        type="time"
        value={time}
        onChange={changeHandler}
        name="time"
        placeholder="Time"
        required="required"
        min={getTodayString()}
      />
      <ContactPicker contacts={contacts} changeHandler={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};
