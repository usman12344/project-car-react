import { Link } from 'react-router-dom';
import { useGlobalContext } from 'helper/hooks/useGlobalContext';
import React from 'react';
import 'helper/format/currency';


export default function ShippingCart() {

  const {state, dispatch} = useGlobalContext();

  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0 border md:border-0 m-5 md:m-0 md:mt-0 -mb-4 rounded-lg " id="shopping-cart">
                    <div className="w-full md:bg-gray-100 p-5 rounded-lg md:text-black text-white">

                        <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                          <h3 className="text-2xl">Shopping Cart</h3>
                        </div>
            
                        {/* <!-- START: Table Title --> */}
                        <div className="border-b border-gray-200 mb-4 hidden md:block">
                          <div className="flex flex-start items-center pb-2 -mx-4">
                            <div className="px-4 flex-none">
                              <div className="" style={{width:90}}>
                                <h6>Photo</h6>
                              </div>
                            </div>
                            <div className="px-4 w-5/12">
                              <div className="">
                                <h6>Produk</h6>
                              </div>
                            </div>
                            <div className="px-4 w-5/12">
                              <div className="">
                                <h6>Rent For</h6>
                              </div>
                            </div>
                            <div className="px-4 w-5/12">
                              <div className="">
                                <h6>Price</h6>
                              </div>
                            </div>
                            <div className="px-4 w-5/12">
                              <div className="text-center">
                                <h6>Action</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                          {/* <!-- END: Table Title --> */}

                          {
                              Object.keys(state.cart).length === 0 ? <p id="cart-empty" className="text-center py-8">
                              Oooops.... Cart is empty <Link to="/" className="underline">Shop Now</Link>
                            </p> : Object.keys(state.cart).map( key => {
                                const item = state.cart[key];
                                return <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" key={key}>
                                <div className="px-4 flex-none">
                                  <div className="" style={{width: 100, height: 90}}>
                                    <img src={item.imgUrls[0]} alt={item.title} className="object-cover rounded-xl w-full h-full" />
                                  </div>
                                </div>
                                <div className="px-4 w-auto md:w-3/12">
                                  <div className="">
                                    <h6 className="font-semibold text-lg md:text-xl leading-8">
                                      {item.title}
                                    </h6>
                                    <span className="text-sm md:text-lg">{item.category.title}</span>
                                    <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                      1 Day
                                    </h6>
                                    <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                     {item.price.currency()}
                                    </h6>
                                  </div>
                                </div>
                                <div className="px-0 w-auto md:w-2/12 flex-none hidden md:block">
                                  <div className="">
                                    <h6 className="font-semibold md:text-lg">
                                      1 Day
                                    </h6>
                                  </div>
                                </div>
                                <div className="px-4 w-auto md:w-3/12 flex-none hidden md:block">
                                  <div className="">
                                    <h6 className="font-semibold md:text-lg">
                                      {item.price.currency()}
                                    </h6>
                                  </div>
                                </div>
                                <div className="px-4 w-2/12">
                                  <div className="text-center">
                                    <button onClick={() => dispatch({
                                      type: "REMOVE_FROM_CART", id: item.id
                                    })} className="text-red-600 border-none focus:outline-none px-3 py-1">
                                      X
                                    </button>
                                  </div>
                                </div>
                              </div>
                                
                            })
                          }
            
                          
                        
                      </div>
                    </div>
  )
}
