

const BtnSubmit = ({ btnType, btnValue  }) => {
  return (
    <>
        <input type={btnType} value={btnValue} className="bg-indigo-600 w-full text-white font-bold uppercase rounded-xl p-2 hover:cursor-pointer hover:bg-indigo-500 md:w-auto mt-5 text-center" />
    </>
  )
}

export default BtnSubmit