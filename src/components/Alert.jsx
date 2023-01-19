

const Alert = ({ alerta }) => {
  return (
    <>
        <div className={`${alerta.type === 'error' ? "text-white from-red-500 to-red-700 bg-gradient-to-r text-center font-bold text-xs p-3 rounded-lg mb-5" : "text-white from-indigo-500 to-indigo-700 bg-gradient-to-r text-center font-bold text-xs p-3 rounded-lg mb-5"}`}> {alerta.msg}</div>
    </>
  )
}

export default Alert