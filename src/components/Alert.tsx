interface Props{
  //`message: String` is replaced by `children: String`
  children: String
}

const Alert = ({children}:Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert