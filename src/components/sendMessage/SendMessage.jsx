import React, { useState } from "react";
import "./sendMessage.style.css";

const SendMessage = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div className="send-message__container">
      <h2 className="send-message__title fancy">Wyślij nam wiadomość</h2>
      <form onSubmit={onSubmitHandler} className="send-message__form">
        <label>Imię</label>
        <input
          size="20"
          type="text"
          name="name"
          value={message.name}
          onChange={onChangeHandler}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={message.email}
          onChange={onChangeHandler}
        />
        <label>Nr telefonu</label>
        <input
          type="tel"
          name="phone"
          value={message.phone}
          onChange={onChangeHandler}
        />
        <label>Wiadomość</label>
        <textarea
          className="send-message__message"
          name="message"
          value={message.message}
          onChange={onChangeHandler}
        />
        <button type="submit" className="send-message__button">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
