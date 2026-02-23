import React from "react";
import Link from "next/link";
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
            <Link href="/signup">
              <li>Sign Up</li>
            </Link>
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
        <div className="flex gap-2">
          <Link href="/Favourite">
            <img src="Wishlist.png" alt="" />
          </Link>
          <Link href="/Shop">
            <img src="Cart-1.png" alt="" />
          </Link>

          <img src="user.png" alt="" />
        </div>
      </div>
      <div class="h-px bg-[#969696] w-full max-w-[1480px ] mx-auto mt-4 "></div>



      <div>
        <h1 className="tracking-wide pt-20 ml-34  pb-20">Home <span className="mx-2">/</span>Cart</h1>
      </div>

      <div className="ml-40 shadow pt-7 pb-5  mr-20">
        <ul className="flex gap-60 ml-10 ">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
        </ul>
      </div>



      <div className="pt-20">

      <div className="ml-40 shadow pt-7 pb-5  mr-20">
        <ul className="flex gap-60 ml-10 mr-20 justify-center items-center ">
            <li className="flex gap-5 items-center"> <img className="h-15" src="Monitor.png" alt="" /> Monitor</li>
            <li>$650</li>

<div className="border flex items-center gap-1 px-5 py-1 w-fit">
  <span>01</span>
  <img src="scroll.png" alt="" />
</div>            <li>$650</li>
        </ul>
      </div>
      </div>



       <div className="pt-20">

      <div className="ml-40 shadow pt-7 pb-5  mr-20">
        <ul className="flex gap-60 ml-10 mr-20 justify-center items-center ">
            <li className="flex gap-5 items-center"> <img className="h-15" src="g-2.png" alt="" />  Gamepad</li>
            <li>$550</li>

<div className="border flex items-center gap-1 px-5 py-1 w-fit">
  <span>02</span>
  <img src="scroll.png" alt="" />
</div>            <li>$1100</li>
        </ul>
      </div>
      </div>


      <div className="flex justify-around gap-128 pt-10 ml-19">
        <button className="border px-9 py-5">Return To Shop</button>
        <button className="border px-9 py-5">Update Cart  </button>
      </div>


<div className="flex pt-20 justify-between ml-7 mr-21 items-start">
<div>
      <div className="gap-10 flex ml-34 ">
        <input type="text" placeholder="Coupon Code" className="border px-10 py-3" />
                <button className="border px-9 py-3 bg-[#DB4444] text-amber-50">Apply Coupon</button>


      </div>
      </div>

      <div className="border min-w-90 h-80 ml-20 pb-4 rounded-sm">
        <h1 className="ml-5 pt-8">Cart Total</h1>
        <div className="flex justify-around ml-2 pt-6 gap-38">
            <h1>Subtotal:</h1>
            <h2>$1750</h2>

        </div>
<hr className="w-75 ml-8 mt-4 " />
        <div className="flex justify-around ml-2 pt-6 gap-38">
            <h1>Shipping:</h1>
            <h2>Free</h2>

        </div>
<hr className="w-75 ml-8 mt-4 " />
 <div className="flex justify-around ml-2 pt-6 gap-38 pb-4">
            <h1>Total:</h1>
            <h2>$1750</h2>
            </div>
<Link href="/Buying">
             <button className="border px-9 py-3 flex mx-auto  bg-[#DB4444] text-amber-50">Procees to checkout</button>
</Link>

      </div>
      </div>


      <div className='pt-35'>

             <div className='bg-black text-white flex  gap-20 h-70 '>


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
</div>
    </>
  );
};

export default page;
