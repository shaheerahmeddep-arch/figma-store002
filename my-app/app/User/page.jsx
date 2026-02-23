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
            <img className="hover:bg-[#DB4444] hover:rounded-2xl " src="user.png" alt="" />
          </Link>
        </div>
      </div>
      <div class="h-px bg-[#969696] w-full max-w-7xl mx-auto mt-4 "></div>

      <div className="flex justify-around gap-170 pt-20">
        <h1>
          Home <span className="mx-2">/</span> My Account
        </h1>
        <h1>
          Welcome! <span className="text-[#DB4444]"> Md Rimel</span>
        </h1>
      </div>

      <div className="flex justify-around gap-40">
        <div className="pt-24">
          <h1 className="font-medium ">Manage My Account</h1>
          <ul className="pt-8 ml-5">
            <li className="text-[#DB4444]">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options </li>
          </ul>
          <h1 className="font-medium pt-11 ">My Orders</h1>
          <ul className="pt-8 ml-5 ">
            <li className="">My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h1 className="font-medium pt-8 ">My WishList</h1>
        </div>
        <div className="pt-20">
          <div className="h-150 w-2xl shadow-xl ">
            <h1 className="font-medium text-2xl pt-10 ml-10 text-[#DB4444] pb-8">
              Edit Your Profile
            </h1>

            <div className="flex ml-10 gap-13">
              <div>
                <h1 className="pb-2">First Name</h1>
                <input
                  type="text"
                  placeholder="Md"
                  className="bg-[#F5F5F5] px-10 py-2"
                />
              </div>
              <div>
                <h1 className="pb-2">Last Name</h1>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="bg-[#F5F5F5]  px-10 py-2"
                />
              </div>
            </div>
            <div className="flex ml-10 gap-13 pt-6">
              <div>
                <h1 className="pb-2">Email</h1>
                <input
                  type="text"
                  placeholder="rimel1111@gmail.com"
                  className="bg-[#F5F5F5] px-10 py-2"
                />
              </div>
              <div>
                <h1 className="pb-2">Address</h1>
                <input
                  type="text"
                  placeholder="Kingston, United State"
                  className="bg-[#F5F5F5]  px-10 py-2"
                />
              </div>
            </div>
           <div className="ml-10 pt-5">
  <h1 className="pb-2 text-xl font-semibold">Password Changes</h1>
  <input
    type="password" 
    placeholder="Current Password"
    className="bg-[#F5F5F5] block w-144 px-4 py-2  outline-none"
  />
</div>
           <div className="ml-10 pt-5">
  <input
    type="password" 
    placeholder="New Passwod"
    className="bg-[#F5F5F5] block w-144 px-4 py-2  outline-none"
  />
</div>
           <div className="ml-10 pt-5">
  <input
    type="password" 
    placeholder="Confirm New Passwod"
    className="bg-[#F5F5F5] block w-144 px-4 py-2  outline-none"
  />
</div>


 <div className="flex justify-end mr-13 pt-6 gap-6">

                <button>Cancel</button>
                <button className="border bg-[#DB4444] text-white py-2 px-3 rounded-md">Save Changes</button>
            </div>
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
