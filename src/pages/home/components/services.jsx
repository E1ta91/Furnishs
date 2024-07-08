
import K from "../../../constant"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-1  pt-5 ">
      {
        K.SERVICES.map(
          (service, index) => {
            return (
              <div key={index}
                className={`flex flex-col gap-1 h-[240px] pl-12 pt-7`}
                style={{ backgroundColor: service.bgColor }}
              >
                <span  >{service.Icons}</span>
                <div className="flex flex-col  gap-3 pt-5">
                <h3 className="font-semibold text-[18px]"> {service.title} </h3>
                <p className="text-wrap text-gray-600 text-[16px]"> {service.description} </p>
                </div>
               
             </div>       
      )
        }
      )
      }
    </div>
  )
}

export default Services