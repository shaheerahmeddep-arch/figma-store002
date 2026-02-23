import React from 'react'
import Link from 'next/link'
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
        <h1 className="tracking-wide pt-20 ml-34  pb-20">
          Home <span className="mx-2">/</span>About
         
        </h1>
      </div>

    
<div className='flex justify-around'>


<div>
    <h1 className='text-4xl font-semibold pt-30 pb-10'>Our Story</h1>
    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
    <p className='pt-8'>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
</div>

<div><img className='h-120 pt-10' src="Story.jpg" alt="" /></div>





</div>


<div className='flex justify-around pt-30'>
<div className='border min-w-40 px-3 py-2'>
    <img className='flex mx-auto' src="Drop.png" alt="" />
    <h1 className='font-bold flex justify-center'>10.5k </h1>
    <h1 className='text-[10px] flex justify-center'>Sallers active our site</h1>
</div>
<div className='border min-w-40 cursor-pointer   py-2 hover:bg-[#DB4444]'>
    <img className='flex mx-auto' src="Dollar.png" alt="" />
    <h1 className='font-bold flex justify-center'>33k </h1>
    <h1 className='text-[10px] flex justify-center'>Mopnthly Produduct Sale</h1>
</div>
<div className='border min-w-40  px-3 py-2'>
    <img className='flex mx-auto' src="H-bag.png" alt="" />
    <h1 className='font-bold flex justify-center'>44.5k </h1>
    <h1 className='text-[10px] flex justify-center'>Customer active in our site</h1>
</div>
<div className='border min-w-40  px-3 py-2'>
    <img className='flex mx-auto' src="Money.png" alt="" />
    <h1 className='font-bold flex justify-center'>25k </h1>
    <h1 className='text-[10px] flex justify-center'>Anual gross sale in our site</h1>
</div>



</div>



<div className='flex gap-20 ml-20 pt-30'>
<div>
    <img className='h-90' src="Pro.png" alt="" />
    <h1 className='font-semibold text-3xl pt-10'>Tom Cruise</h1>
    <h2>Founder & Chairman</h2>
    <img src="in.png" alt="" />
</div>

<div>
    <img className='h-90' src="Pro.png" alt="" />
    <h1 className='font-semibold text-3xl pt-10'>Tom Cruise</h1>
    <h2>Managing Director</h2>
    <img src="in.png" alt="" />
</div>

<div>
    <img className='h-90' src="Pro-2.png" alt="" />
    <h1 className='font-semibold text-3xl pt-10'>Will Smith</h1>
    <h2>Product Designer</h2>
    <img src="in.png" alt="" />
</div>


</div>

<div className='flex justify-center pt-10'>
    <img src="Dot.png" alt="" />
</div>








  <div className="flex ml-25 pt-60 gap-36  pb-35">
        <div>
          <img className="flex mx-auto" src="Services.png" alt="" />
          <h1 className="font-bold  text-[21px]  pt-6">
            FREE AND FAST DELIVERY
          </h1>
          <h1>Free delivery for all orders over $140</h1>
        </div>

        <div>
          <img className="flex mx-auto" src="Services-1.png" alt="" />
          <h1 className="font-bold  text-[21px]  pt-6">
            24/7 CUSTOMER SERVICE
          </h1>
          <h1>Friendly 24/7 customer support</h1>
        </div>
        <div>
          <img className="flex mx-auto" src="Services-2.png" alt="" />
          <h1 className="font-bold  text-[21px] pt-6">MONEY BACK GUARANTEE</h1>
          <h1>We reurn money within 30 days</h1>
        </div>
      </div>






      <div className="pt-35">
        <div className="bg-black text-white flex  gap-20 h-70 ">
          <div className="ml-28">
            <h1 className="font-semibold text-[26px] pt-6">Exclusive</h1>
            <h1 className="pt-6">Subscribe</h1>
            <h1 className="pt-6">Get 10% off your first order</h1>

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

          <div>
            <h1 className="pt-6  font-bold">Support</h1>
            <h1 className="pt-4">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </h1>
            <h1 className="pt-4">exclusive@gmail.com</h1>
            <h1 className="pt-4"> +88015-88888-9999</h1>
          </div>

          <div>
            <h1 className="pt-6 font-bold">Account</h1>
            <h1 className="pt-4">My Account</h1>
            <h1 className="pt-4">Login / Register</h1>
            <h1 className="pt-4">Cart</h1>
            <h1 className="pt-4">Wishlist</h1>
            <h1 className="pt-4">Shop</h1>
          </div>

          <div>
            <h1 className="pt-6 font-bold">Quick Link</h1>
            <h1 className="pt-4">Privacy Policy</h1>
            <h1 className="pt-4">Terms Of Use</h1>
            <h1 className="pt-4">FAQ</h1>
            <h1 className="pt-4">Contact</h1>
          </div>

          <div>
            <h1 className="pt-6 font-bold">Download App</h1>
            <h1 className="pt-4">Save $3 with App New User Only</h1>

            <div className="pt-4">
              <img src="Qr.png" alt="" />
            </div>
            <img className="pt-4" src="Logo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
