import React from "react";
import Link from "next/link";
const Navbar = () => {
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

            <Link href="/Contact">
              <li>Contact</li>
            </Link>

            <Link href="/About">
              <li>About</li>
            </Link>
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
          <Link href="/User">
            <img src="user.png" alt="" />
          </Link>
        </div>
      </div>
      <div class="h-px bg-[#969696] w-full max-w-7xl mx-auto mt-4 "></div>

      <div className="pt-20 ml-20 pb-20">
        <h1>
          Account <span className="mx-2">/</span>Gaming
          <span className="mx-2">/</span>Havic HV G-92 Gamepad
        </h1>
      </div>

      <div className="flex ml-20">
        <div className="">
          <img className="pt-4" src="control-1.png" alt="" />
          <img className="pt-4" src="control-4.png" alt="" />
          <img className="pt-4" src="control-2.png" alt="" />
          <img className="pt-4" src="control-3.png" alt="" />
        </div>
        <div className="pt-4 ml-8">
          <img src="control-5.png" alt="" />
        </div>

        <div className="ml-18 pt-2">
          <h1 className="font-semibold text-2xl ">Havic HV G-92 Gamepad</h1>
          <div className="flex  gap-2 pt-4">
            <img src="Four star.png" alt="" />
            <h1>(150 Reviews)</h1>
            <h1 className="text-[#00FF66]">
              <span className="mx-2 text-black">|</span> In Stock
            </h1>
          </div>
          <h1 className="text-2xl font-semibold pt-4">$192.00</h1>
          <p className="pt-6 text-[14px]">
            PlayStation 5 Controller Skin High quality vinyl with air <br />{" "}
            channel adhesive for easy bubble free install & mess <br />
            free removal Pressure sensitive.
          </p>

          <div class="h-px bg-[#969696] w-full max-w-xl mx-auto mt-6 "></div>
          <div className="flex pt-4">
            <h1>Colours:</h1>
            <div className="rounded-full border bg-[#E07575] w-4 ml-4"></div>
            <div className="rounded-full border bg-[#A0BCE0] w-4 ml-1 "></div>
          </div>
          <div className="flex pt-4">
            <h1>Colours:</h1>
            <div className="rounded-md flex  justify-center  border  w-4 ml-4 px-3">
              xs
            </div>
            <div className="rounded-md border  flex  justify-center  w-4 ml-1 px-3">
              s
            </div>
            <div className="rounded-md border  flex  justify-center  w-4 ml-1 px-3 hover:bg-[#DB4444] cursor-pointer">
              M
            </div>
            <div className="rounded-md border  flex  justify-center  w-4 ml-1 px-3">
              L
            </div>
            <div className="rounded-md border  flex  justify-center  w-4 ml-1 px-3">
              XL
            </div>
          </div>

          <div>
            <div className="pt-6 flex gap-2">
              <div class="inline-flex items-center border border-gray-300 rounded-md overflow-hidden font-sans">
                <button class="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 border-r border-gray-300 transition-colors text-xl">
                  −
                </button>

                <div class="px-6 text-lg font-medium text-gray-800 min-w-[3rem] text-center">
                  2
                </div>

                <button class="w-10 h-10  items-center justify-center bg-[#d9534f] hover:bg-[#c9433f] text-white  text-xl">
                  +
                </button>
              </div>
              <div className="flex gap-2">
                <button class="w-40 rounded-md h-10  items-center justify-center bg-[#d9534f] hover:bg-[#c9433f] text-white  text-xl">
                  Buy Now
                </button>
                <div className="border p-3 w-10 rounded-sm">
                  <img src="Wishlist.png" alt="" />
                </div>
              </div>
            </div>
            <div className="pt-6 ">
              <div className="flex gap-4 pt-4 border ">
                <div>
                  <img src="delivery.png" alt="" />
                </div>
                <h1 className="text-[14px] pb-3">
                <span className="font-semibold">  Free Delivery </span> <br />  Enter your postal code for Delivery
                  Availability
                </h1>
              </div>
              <div className="flex gap-4 pt-4 border ">
                <div>
                  <img src="return.png" alt="" />
                </div>
                <h1 className="text-[14px] pb-3">
                <span className=" font-semibold">  Return Delivery</span> <br /> Free 30 Days Delivery Returns. Details
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="ml-20 pt-35 flex items-center">
        <button className="bg-orange-600 w-5 h-11 rounded-md text-orange-600">
          .
        </button>
        <h1 className="text-orange-600 font-semibold ml-[16px]">Related Item</h1>
      </div>
      <div className="pt-10 ml-20 flex gap-8 overflow-x-auto no-scrollbar ">
        <div className="min-w-50">
          <img className="h-50" src="Remote.png" alt="" />
          <h1 className="font-medium  pt-4">HAVIT HV-G92 Gamepad</h1>
          <h2 className="flex gap-3 text-red-500">
            $120 <h2 className="line-through text-gray-400">$160</h2>
          </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>

        <div className="min-w-50 ">
          <div className="w-50 bg-white rounded-sm overflow-hidden group">
            <div className="relative bg-gray-100 p-8 h-50">
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
                -35%
              </span>

              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/heart.png"
                  alt="heart"
                  className="w-8 h-8 bg-white p-2 rounded-full shadow cursor-pointer"
                />
                <img
                  src="/eye.png"
                  alt="eye"
                  className="w-8 h-8 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Keyboard-1.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium pt-4">HAVIT HV-G92 Gamepad</h1>
          <h2 className="flex gap-3 text-red-500">
            $120 <h2 className="line-through text-gray-400">$160</h2>
          </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>

        <div className="min-w-50">
          <img className="h-50" src="Comp.png" alt="" />
          <h1 className="font-medium pt-4">AK-900 Wired Keyboard</h1>
          <h2 className="flex gap-3 text-red-500">
            $960 <h2 className="line-through text-gray-400">$1160</h2>
          </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(75)</h1>
          </div>
        </div>
       
        <div className="min-w-50">
          <img className="h-50" src="speaker.png" alt="" />
          <h1 className="font-medium pt-4">S-Series Speaker </h1>
          <h2 className="flex gap-3 text-red-500">
            $375 <h2 className="line-through text-gray-400">$400</h2>
          </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>
        <div className="min-w-80 ">
          <img className="h-50" src="Remote.png" alt="" />
          <h1 className="font-medium pt-4"> S-Series Comfort Chair </h1>
          <h2 className="flex gap-3 text-red-500">
            $375 <h2 className="line-through text-gray-400">$400</h2>
          </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
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

export default Navbar;
