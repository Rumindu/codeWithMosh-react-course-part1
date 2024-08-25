interface Props{
  message: String
}

const Alert = ({message}:Props) => {
  return (
    <div className="alert alert-primary">{message}</div>
  )
}

export default Alert