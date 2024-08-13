import K from "../../../constant"

const Customers = () => {
  return (
    <div className="pt-6 flex flex-col gap-8 ">

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[#71717A]">TESTMONIALS</p>
        <h1 className="text-2xl font-semibold">HAPPY CUSTOMERS</h1>
      </div>



    <div className="flex flex-wrap justify-center items-center gap-4">
    {
      K.CUSTOMERS.map(
        (customers, index) => {
          return (
            
            <div key={index} className="flex flex-col gap-5 border rounded-lg p-4 shadow-lg max-w-md">
            
              <p className="mb-4">{customers.description}</p>
            <div className="flex items-center gap-4">
              <img src={customers.img} className="w-[100px]  object-cover rounded-lg" alt="img" />
              <div>
                <p className="text-lg font-semibold text-[#CF7500]">{customers.name}</p>
                <p className="text-sm text-gray-500">{customers.title}</p>
              </div>
            </div>
              </div>
          )
      })
    }

   </div>
   </div>
  )
}

export default Customers