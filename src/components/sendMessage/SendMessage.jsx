import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sendMessage.style.css";

const SendMessage = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const onChangeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onSentMessage = () => {
    setMessageSent(true);
  };

  return (
    <div className="send-message__container">
      <h2 className="send-message__title fancy">Wyślij nam wiadomość</h2>
      {messageSent && (
        <h2 className="send-message__title message-sent">
          Wiadomość wysłana. Postaramy się odpisać tak szybko jak to możliwe.
          Dziękujemy!
        </h2>
      )}
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
        <div className="send-message__button-group">
          <button
            type="submit"
            className="send-message__button"
            onClick={onSentMessage}
          >
            Wyślij
          </button>
          <Link to="/">
            <button className="send-message__button">Powrót</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
