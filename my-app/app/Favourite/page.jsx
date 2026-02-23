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
      <div class="h-px bg-[#969696] w-full max-w-7xl mx-auto mt-4 "></div>

      <div className="flex justify-around gap-100 pt-23">
        <h1 className="pt-3 text-2xl">Wishlist (4)</h1>
        <div className="flex">
          <button className=" flex px-10 py-3 border mx-auto">
            Move All To Bag
          </button>
        </div>
      </div>

      <div className="pt-10 ml-34 flex gap-14">
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <span className="absolute top-4 left-2 bg-[#DB4444] text-white text-sm px-2 py-0.5 rounded">
                -35%
              </span>

              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/Delete.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Bag-1.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium  pt-4">Gucci duffle bag</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">
              $100<h2 className="line-through text-gray-400">$1160</h2>
            </h2>
          </div>
        </div>
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/Delete.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Speaker-1.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>
          <h1 className="font-medium  pt-4">RGB liquid CPU Cooler</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">$960 </h2>
          </div>
        </div>

        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/Delete.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/G.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium  pt-4">GP11 Shooter USB Gamepad</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">$550</h2>
          </div>
        </div>
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/Delete.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Jacket.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>
          <h1 className="font-medium  pt-4">Quilted Satin Jacket</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">$750</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-around gap-100 pt-22">
        <div className=" flex items-center">
          <button className="bg-orange-600 w-5 h-11 rounded-md text-orange-600">
            .
          </button>
          <h1 className="text-orange-600 font-semibold ml-[16px]">
            Just For YouToday’s
          </h1>
        </div>

        <div className="flex">
          <button className=" flex px-10 rounded-sm py-4 border mx-auto">
            See All
          </button>
        </div>
      </div>

      <div className="pt-10 ml-34 flex gap-14">
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <span className="absolute top-4 left-2 bg-[#DB4444] text-white text-sm px-2 py-0.5 rounded">
                -35%
              </span>

              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/eye.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Mac.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium  pt-4">ASUS FHD Gaming Laptop</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">
              $100<h2 className="line-through text-gray-400">$1160</h2>
            </h2>
          </div>

          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <div className="absolute top-2 right-0.5 flex flex-col gap-3">
                <img
                  src="/eye.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/PC.png"
                alt="Keyboard"
                className="mx-auto h-34 pt-2 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>
          <h1 className="font-medium  pt-4">IPS LCD Gaming Monitor</h1>
          <div className="flex gap-2">
            <h2 className="flex gap-3 text-red-500">$960 </h2>
          </div>

          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>

        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group">
            <div className="relative bg-gray-100 p-7">
              <span className="absolute top-4 left-2 bg-[#00FF66] text-white text-sm px-2 py-0.5 rounded">
                -35%
              </span>

              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/eye.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/G-1.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium pt-4">HAVIT HV-G92 Gamepad</h1>
          <h2 className="flex gap-3 text-red-500">$560 </h2>
          <div className="flex gap-2">
            <img src="Five star.png" alt="" />
            <h1>(88)</h1>
          </div>
        </div>
        <div>
          <div className="w-52 bg-white rounded-sm overflow-hidden shadow-md group ">
            <div className="relative bg-gray-100 p-7">
              <div className="absolute top-4 right-0.5 flex flex-col gap-3">
                <img
                  src="/eye.png"
                  alt="heart"
                  className="w-9 h-9 bg-white p-2 rounded-full shadow cursor-pointer"
                />
              </div>

              <img
                src="/Keyboard-1.png"
                alt="Keyboard"
                className="mx-auto h-36 object-contain"
              />

              <button
                className="absolute flex justify-center gap-2 bottom-0 left-0 w-full bg-black text-white py-2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300"
              >
                <img className="text-white" src="Shop.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="font-medium pt-4">AK-900 Wired Keyboard</h1>
          <h2 className="flex gap-3 text-red-500">$200</h2>
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
