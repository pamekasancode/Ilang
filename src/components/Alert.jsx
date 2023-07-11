const Alert = ({message}) => {
  return (
    <div className="w-full bg-red-500 text-sm text-white px-4 py-2 rounded-md">
        <p>{message}</p>
    </div>
  )
}


export default Alert;