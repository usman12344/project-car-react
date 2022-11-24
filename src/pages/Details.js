import fetch from 'helper/fetch/index'
import Breadcrumb from 'components/Breadcrumb.js';
import useAsync from 'helper/hooks/useAsync';
import Detail from 'parts/Details/Detail';
import Suggestion from 'parts/Details/Suggestion';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PageErrorMessage from 'parts/PageErrorMessage';
import useScrollToTop from 'helper/hooks/useScrollToTop';


function LoadingProductDetail(){
  return <section className="container mx-auto">
  <div className="flex flex-wrap my-4 md:my-12">
    <div className="w-full md:hidden px-4 text-white">
      <h2 className="w-8 h-full bg-gray-100 animate-pulse rounded-full">
        
      </h2>
      <span className="text-xl" id="costt2"></span>
    </div>
    <div className="flex-1">
      <div className="slider">
        <div className="thumbnail">
    
          {
            Array(5).fill().map((_, index) => {
              return <div className="px-2" key={index}>
              <div className="rounded-xl item bg-gray-300 animate-pulse" style={{width: 106, height: 106}}>
            
              </div>
            </div>
            })
          }

          

        </div>
        <div className="preview">
          <div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden">
          </div>
        </div>
        </div>
      </div>
    <div className="flex-1 px4 md:p-6 text-white px-4">
      <div className="hidden md:block">
        <h2 className="w-80 h-3 bg-gray-300 animate-pulse rounded-lg my-1">
        </h2>
        <p className="w-80 h-3 bg-gray-300 animate-pulse rounded-lg" id="costt">
        </p>  
      </div>
      <div className='flex items-center'>
        <div htmlFor="cars" className="w-24 h-3 bg-gray-300 mt-3 animate-pulse mr-3 rounded-lg"></div>
          <select name="cars" id="cars" className="bg-gray-300 text-black rounded-lg mt-3">
          </select>
      </div>
      <div  className="w-44 mt-8 h-10 animate-pulse bg-gray-300 rounded-full  ">  
      </div>
      <br></br>
      <div className="my-8 ">
        <h6 className="w-44 h-3 bg-gray-300 mb-4 mt-5 rounded-lg">
        </h6>
        <br></br>
        <p className="w-80 h-3 bg-gray-300 mb-6 rounded-lg">
                </p>
                <p className="w-80 h-3 bg-gray-300 mb-6 rounded-lg">
              </p>
                <p className="w-96 h-3 bg-gray-300 mb-6 rounded-lg">
              </p>
                <p className="w-96 h-3 bg-gray-300 mb-6 rounded-lg">
              </p>
              <br></br>
              <p className="w-80 h-3 bg-gray-300 mb-6 rounded-lg">
              </p>
              <p className="w-80 h-3 bg-gray-300 mb-6 rounded-lg">
              </p><p className="w-96 h-3 bg-gray-300 mb-6 rounded-lg">
              </p><p className="w-96 h-3 bg-gray-300 mb-6 rounded-lg">
              </p>
      </div>
    </div>
    </div>
</section>
}

function LoadingSuggestion(){
  return <section className="px-4 py-16">
  <div className="container mx-auto">
    <div className="flex flex-start mb-4 text-white">
      <h3 className="text-2xl capitalize font-semibold">
        complete your room <br /> with what we designed
      </h3>
    </div>
    <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
      {
        Array(4).fill().map((_,item) => {
          return <div className="relative px-3 w-full md:w-3/12 mb-4" key={item}>
          <div className="rounded-xl p-4 pb-8 relative bg-gray-300 animate-pulse">
            <div className="bg-gray-500 rounded-xl overflow-hidden w-full h-48">
            </div>
            <h5 className="w-44 h-3 bg-gray-500 rounded-xl mt-4">
            </h5>
            <div className="w-32 h-3 bg-gray-500 rounded-xl mt-3"></div>
          </div>
        </div>
        })
      }
    </div>
  </div>
</section>
}

export default function Details() {
  const {idp} = useParams();

  const { data, isError, error, isLoading,run} = useAsync();

  useEffect(() => {
    run(
      fetch(
         { url:`/api/products/${idp}` }
           )
        )
  
  }, [run,idp])
  
// console.log(data);
useScrollToTop();
  return (
    
    <>
    <Header />
    <Breadcrumb List={[
        {url: "/", name:"Home"},
        {url: "/products", name:"Car"},
        {url: "/products/1", name:"Details"},
    ]} />

    {
      isError ? <PageErrorMessage title="Product Not Found" body={error.errors.message} /> :
      <>
        {
           isLoading ? <LoadingProductDetail /> : <Detail data={data} />
        }

        {
          isLoading ? <LoadingSuggestion /> : <Suggestion data={data?.relatedProducts || {} } />
        }
      </>
    }
    
    
    
    <Footer />
    </>
  )
}
