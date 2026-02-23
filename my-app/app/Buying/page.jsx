import Link from "next/link";
import React from "react";

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
          Account <span className="mx-2">/</span>My Account
          <span className="mx-2">/</span> Product<span className="mx-2">/</span>
          View Cart<span className="mx-2">/</span>CheckOut
        </h1>
      </div>

      <div className="flex justify-between ml-7 mr-21 items-start">
        <div className="ml-26">
          <h1 className="font-medium text-3xl">Billing Details</h1>
          <div>
            <h1 className="text-gray-300 pb-2 pt-12">First Name*</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">Company Name</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">Street Address*</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">
              Apartment, floor, etc. (optional)
            </h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">Town/City*</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">Phone Number*</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="text-gray-300 pb-2 pt-12">Email Address*</h1>
            <input type="text" className="bg-gray-200 px-27 py-1" />
          </div>

          <div>
            <h1 className="flex items-center pb-2 pt-12 gap-3">
              <img src="Tik-1.png" alt="" />
              Save this information for faster check-out next time
            </h1>
          </div>
        </div>

        <div className="  h-80  pb-4 pt-20 rounded-sm">
          <div className="flex justify-between items-center ml-7 mr-7 pb-3">
            <h1 className="flex items-center gap-2">
              <img src="g-2.png" alt="" />
              H1 Gamepad
            </h1>
            <h1>$650</h1>
          </div>

          <div className="flex justify-between items-center ml-7 mr-7">
            <h1 className="flex items-center gap-2">
              <img src="Monitor.png" alt="" />
              LCD Monitor
            </h1>
            <h1>$650</h1>
          </div>
          <div className="flex justify-around ml-2 pt-6 gap-38">
            <h1>Subtotal:</h1>
            <h2>$1750</h2>
          </div>
          <hr className="w-80 ml-9 mt-4 " />
          <div className="flex justify-around ml-2 pt-6 gap-38">
            <h1>Shipping:</h1>
            <h2>Free</h2>
          </div>
          <hr className="w-80 ml-9 mt-4 " />
          <div className="flex justify-around ml-2 pt-6 gap-38 pb-4">
            <h1>Total:</h1>
            <h2>$1750</h2>
          </div>
          <div className="flex items-center gap-11 ml-9">
            <div className="flex items-center gap-2">
              <button className="border rounded-full p-2"></button>
              <h1>Back</h1>
            </div>
            <img src="Icons.png" alt="" />
          </div>

          <div className="flex items-center gap-2 ml-9 pt-5">
            <button className="border rounded-full p-2 bg-black"></button>
            <h1>Cash on delivery</h1>
          </div>

          <div className="flex gap-3 ml-10 pt-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-3"
            />
            <button className="border px-3 py-3 bg-[#DB4444] text-white">
              Apply Coupon
            </button>
          </div>

          <div className="ml-10 pt-5">
            <button className="border px-3 py-3 bg-[#DB4444] text-white">
              Place Order
            </button>
          </div>
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
  );
};

export default page;
