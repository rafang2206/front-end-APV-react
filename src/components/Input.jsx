
const Input = ({ title, type, placeholder, value, handleChangeValue  }) => {
  return (
    <>
        <div>
            <label htmlFor={title} className="uppercase text-gray-600 block text-xl font-bold">{title}</label>
            <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type={type} placeholder={placeholder}
            value={value} onChange={(e) => {handleChangeValue(e.target.value)}} 
            />
        </div>
    </>
  )
}

export default Input