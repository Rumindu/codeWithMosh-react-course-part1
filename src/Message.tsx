const Message = () => {
  let count = 0; // Declared as part of rendering
  count++;
  return <div>Message {count}</div>;
};

export default Message;
