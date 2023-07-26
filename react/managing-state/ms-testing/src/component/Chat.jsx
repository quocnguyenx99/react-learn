function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        cols="30"
        rows="10"
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: "edited_message",
            message: "",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}

export default Chat;
