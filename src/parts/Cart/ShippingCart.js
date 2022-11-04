import React from 'react';

export default function ShippingCart() {
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
            
                          {/* <!-- START: Cart empty wrapper --> */}
            
                        <p id="cart-empty" className="hidden text-center py-8">
                          Oooops.... Cart is empty <a href="details.html" className="underline">Shop Now</a>
                        </p>
            
                          {/* <!-- END: Cart empty wrapper --> */}
            
                          {/* <!-- START: Table item 1 --> */}
            
                          <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="1">
                            <div className="px-4 flex-none">
                              <div className="" style={{width: 100, height: 90}}>
                                <img src="../images/content/car1.png" alt="chair office room 1" className="object-cover rounded-xl w-full h-full" />
                              </div>
                            </div>
                            <div className="px-4 w-auto md:w-3/12">
                              <div className="">
                                <h6 className="font-semibold text-lg md:text-xl leading-8">
                                  Saman Kakka
                                </h6>
                                <span className="text-sm md:text-lg">Office Room</span>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  1 Day
                                </h6>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  IDR 28.000.000
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
                                  IDR 28.000.000
                                </h6>
                              </div>
                            </div>
                            <div className="px-4 w-2/12">
                              <div className="text-center">
                                <button data-delete-item="1" className="text-red-600 border-none focus:outline-none px-3 py-1">
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
            
                          {/* <!-- END: Table item 1 -->
                          <!-- START: Table item 2 --> */}
            
                          <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="2">
                            <div className="px-4 flex-none">
                              <div className="" style={{width: 100, height: 90}}>
                                <img src="../images/content/car2.png" alt="chair office room 2" className="object-cover rounded-xl w-full h-full" />
                              </div>
                            </div>
                            <div className="px-4 w-auto md:w-3/12">
                              <div className="">
                                <h6 className="font-semibold text-lg md:text-xl leading-8">
                                  Green Seat
                                </h6>
                                <span className="text-sm md:text-lg">Office Room</span>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  1 Day
                                </h6>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  IDR 12.500.000
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
                                  IDR 12.500.000
                                </h6>
                              </div>
                            </div>
                            <div className="px-4 w-2/12">
                              <div className="text-center">
                                <button data-delete-item="2" className="text-red-600 border-none focus:outline-none px-3 py-1">
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
            
                          {/* <!-- END: Table item 2 -->
                          <!-- START: Table item 3 --> */}
            
                          <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="3">
                            <div className="px-4 flex-none">
                              <div className="" style={{width: 100, height: 90}}>
                                <img src="../images/content/car3.png" alt="chair office room 3" className="object-cover rounded-xl w-full h-full" />
                              </div>
                            </div>
                            <div className="px-4 w-auto md:w-3/12">
                              <div className="">
                                <h6 className="font-semibold text-lg md:text-xl leading-8">
                                  Pacific
                                </h6>
                                <span className="text-sm md:text-lg">Office Room</span>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  1 Day
                                </h6>
                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                  IDR 88.800.000
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
                                  IDR 88.800.000
                                </h6>
                              </div>
                            </div>
                            <div className="px-4 md:w-2/12 w-auto">
                              <div className="text-center">
                                <button data-delete-item="3" className="text-red-600 border-none focus:outline-none px-3 py-1">
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
            
                          {/* <!-- END: Table item 3 --> */}
                        
                      </div>
                    </div>
  )
}
