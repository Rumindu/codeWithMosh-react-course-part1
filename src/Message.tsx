let count = 0;

const Message = () => {
  count++; // Modifying count during rendering
  return <div>Message {count}</div>;
};

export default Message;
