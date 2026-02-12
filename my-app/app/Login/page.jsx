import React from 'react'

const page = () => {
  return (
     <>
      <div className="bg-black py-3">
        <div className="flex justify-around ml-36">
          <h1 className="text-white text-center text-[12px] font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="text-[14px] ml-2 underline">ShopNow</span>
          </h1>
          <h1 className="text-white flex font-poppins text-[12px] items-center">
            English <img className="text-white" src="Dropdown.png" alt="" />
          </h1>
        </div>
      </div>

      <div className="flex  items-center pt-10 gap-30 ml-34">
        <h1 className="font-semibold text-[26px]">Exclusive</h1>
        <div>
          <ul className="flex gap-12 font-Poppins">
            <li>
              Home
              <hr className="text-gray w-10 ml-[2.9px] h-1" />
            </li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div>
          <div className="relative  max-w-50">
            <img
              src="Vector.png"
              alt=""
              className="absolute -right-9 top-1/2 -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-67 px-3 pl-2 py-2  rounded-md outline-none bg-[#F5F5F5]"
            />
          </div>
        </div>
      </div>
      <div class="h-px bg-[#969696] w-full max-w-7xl mx-auto mt-4 "></div>







      <div className="flex gap-31 pt-15 pb-35">
        <div className="">
          <img className="h-170 w-2xl" src="Side.png" alt="" />
        </div>

        <div className="pb-10 ">
          <h1 className="pb-6 text-3xl font-semibold">Log in to Exclusive</h1>
          <h2 className="pb-11">Enter your details below</h2>

<div className="flex flex-col">
          <input
            type="text"
            placeholder="Email or Phone Number"
            class="border-b border-gray-300 w-90 focus:border-black outline-none bg-transparent pb-1 pt-10 transition-colors "
            />
          <input
            type="text"
            placeholder="Password"
            class="border-b border-gray-300 w-90 pt-10 focus:border-black outline-none bg-transparent pb-1 transition-colors "
            />
            </div>

           <div className='pt-13 flex items-center gap-20'>

            
      <button className='bg-[#DB4444] flex w-30 px-11  justify-center py-4 rounded-sm '>Log In</button>
      <h1 className='text-[#DB4444]'>Forget Password?</h1>
    
           </div>
 
        </div>

       
      </div>



        <div className='bg-black text-white flex  gap-20 h-70  '>


<div className='ml-28'>
          <h1 className='font-semibold text-[26px] pt-6'>Exclusive</h1>
<h1 className='pt-6'>Subscribe</h1>
<h1 className='pt-6'>Get 10% off your first order</h1>

<div className="relative  max-w-50 pt-4 ">
    <img
    src="Send.png"
    alt=""
    className="absolute -right-0.5 top-[63%] -translate-y-1/2 w-4 h-4"
  />
  <input
    type="text"
    placeholder="Enter your email"
    className="w-52 px-3 pl-2 py-2 border rounded-md  bg-[#0c0b0b]"
  />

  
</div>
</div>





<div >

  <h1 className='pt-6  font-bold'>Support</h1>
  <h1 className='pt-4'>111 Bijoy sarani, Dhaka,  <br />DH 1515, Bangladesh.</h1>
  <h1 className='pt-4'>exclusive@gmail.com</h1>
  <h1 className='pt-4'> +88015-88888-9999</h1>
</div>

<div>
  <h1 className='pt-6 font-bold'>Account</h1>
  <h1 className='pt-4'>My Account</h1>
  <h1 className='pt-4'>Login / Register</h1>
  <h1 className='pt-4'>Cart</h1>
  <h1 className='pt-4'>Wishlist</h1>
  <h1 className='pt-4'>Shop</h1>
</div>


<div>
  <h1 className='pt-6 font-bold'>Quick Link</h1>
  <h1 className='pt-4'>Privacy Policy</h1>
  <h1 className='pt-4'>Terms Of Use</h1>
  <h1 className='pt-4'>FAQ</h1>
  <h1 className='pt-4'>Contact</h1>
</div>


<div>
  <h1 className='pt-6 font-bold'>Download App</h1>
  <h1 className='pt-4'>Save $3 with App New User Only</h1>

  <div className='pt-4'>
    <img src="Qr.png" alt="" />
  </div>
  <img className='pt-4' src="Logo.png" alt="" />
</div>

    </div>
    </>
  )
}

export default page
