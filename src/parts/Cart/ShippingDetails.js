import fetch from 'helper/fetch';
import useAsync from 'helper/hooks/useAsync';
import useForm from 'helper/hooks/useForm';
import { useGlobalContext } from 'helper/hooks/useGlobalContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function ShippingDetails() {

  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const {data, run, isLoading} = useAsync();

  const {first: payload, fnUpdateState} = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    pickUpdate: "",
    dropUpdate: "",
    payment: "",
  })  

  const isSubmitDisabled = Object.keys(payload).filter(key => {
    return payload[key] !== ""
  }).length === Object.keys(payload).length;

  useEffect(() => {
      run (
        fetch({
        url: `/api/checkout/meta`
      })
    )
  }, [run])
  // console.log(data);

  async function fnSubmit(event){
    event.preventDefault();
    try {
      const res = await fetch({
        url:`/api/checkout`,
        method: "POST",
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map( key => state.cart[key])
        })
      });
      console.log(res);
      if(res)
      {
        navigate('/congratulation');
        dispatch({
          type: "RESET_CART"
        })
      }
    } catch (error) {
      console.log(error);
    }
   }
  
  console.log(payload)
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
              <form onSubmit={fnSubmit}>
                <div className="flex flex-start mb-6">
                  <h3 className="text-2xl">Shipping Details</h3>
                </div>
      
                {/* <!-- START: input complete name --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="completeName" className="text-sm mb-2">Complete Name</label>
                  <input onChange={fnUpdateState} value={payload.completeName} type="text" name="completeName" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your name" />
                </div>
                {/* <!-- END: input complete name -->
                <!-- START: input complete email address --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="emailAddress" className="text-sm mb-2">Email Address</label>
                  <input onChange={fnUpdateState} value={payload.emailAddress} type="text" name="emailAddress" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your email" />
                </div>
                {/* <!-- END: input complete email address -->
                <!-- START: input complete address --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="address" className="text-sm mb-2">Address</label>
                  <input onChange={fnUpdateState} value={payload.address} type="text" name="address" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your address" />
                </div>
                {/* <!-- END: input complete address -->
                <!-- START: input complete phone number --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="phoneNumber" className="text-sm mb-2">Phone Number</label>
                  <input onChange={fnUpdateState} value={payload.phoneNumber} type="number" name="phoneNumber" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your phone number" />
                </div>
                {/* <!-- END: input complete phone number -->
                <!-- START: input complete phone number --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="pickUpdate" className="text-sm mb-2">Pick Up Date</label>
                  <input onChange={fnUpdateState} value={payload.pickUpdate} type="date" name="pickUpdate" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your Pick Up Date" />
                </div>
                {/* <!-- END: input complete phone number -->
                <!-- START: input complete phone number --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="dropUpdate" className="text-sm mb-2">Drop Up Date</label>
                  <input onChange={fnUpdateState} value={payload.dropUpdate} type="date"  name="dropUpdate" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your Drop Up Date" />
                </div>
                {/* <!-- END: input complete phone number -->
                <!-- START: input complete choose courier --> */}
                <div className="flex flex-col mb-4">
                  
      
                  
                </div>
                {/* <!-- END: input complete choose courier -->
                <!-- START: input complete choose courier --> */}
                <div className="flex flex-col mb-4">
                  <label className="text-sm mb-2">Choose Payment</label>
      
                  <div className="flex -mx-2 flex-wrap">

                    {
                      isLoading ? Array(4).fill().map((_,index) => {
                      return <div className="px-2 w-6/12 h-24 mb-4" key={index}>
                       <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                      </div>
                      }) :
                      data?.payments?.map((item,id) => {
                        return <div className="px-2 w-6/12 h-24 mb-4" key={id}>
                        <button onClick={() => {
                          fnUpdateState({
                            target: {
                              name:"payment", value: item.id
                            }
                          })
                        }} type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                          <img src={item.imgUrl} alt={item.name} className="object-contain max-h-full" />
                        </button>
                      </div>
                      })
                    }
                    
                  </div>
                </div>
                {/* <!-- END: input complete choose courier --> */}
      
                <div className="text-center">
                  <button type="submit" disabled={!isSubmitDisabled} className="bg-yellow-500 text-black focus:text-black focus:outline-none focus:bg-red-200 w-full h-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6">
                    Checkout Now
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}
