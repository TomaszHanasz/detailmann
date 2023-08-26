import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./sendMessage.style.css";

const SendMessage = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    setError("");
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      message.name.trim() === "" ||
      message.email.trim() === "" ||
      message.phone.trim() === "" ||
      message.message.trim() === ""
    ) {
      setError("Wypełnij wszystkie pola");
      return;
    }
    setMessage({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    onSentMessage();
  };

  const onSentMessage = () => {
    setMessageSent(true);
  };

  return (
    <Fade>
      <div className="send-message__container">
        <h2 className="send-message__title fancy">Wyślij nam wiadomość</h2>
        {<h2 className="send-message__title message-sent">{error}</h2>}
        {messageSent && (
          <h2 className="send-message__title message-sent">
            Wiadomość wysłana. Postaramy się odpisać tak szybko jak to możliwe.
            Dziękujemy!
          </h2>
        )}
        <form
          onSubmit={onSubmitHandler}
          className="send-message__form"
          action="https://formsubmit.co/sebastian.detailmann@gmail.com"
          method="POST"
        >
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
            <button type="submit" className="send-message__button">
              Wyślij
            </button>
            <Link to="/">
              <button className="send-message__button">Powrót</button>
            </Link>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default SendMessage;
