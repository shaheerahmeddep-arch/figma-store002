import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
    <div className='bg-black py-3'>
        <div className='flex justify-around ml-36'>

        <h1 className='text-white text-center text-[12px] font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='text-[14px] ml-2 underline'>ShopNow</span></h1>
        <h1 className='text-white flex font-poppins text-[12px] items-center'>English <img className='text-white' src="Dropdown.png" alt="" /></h1>
        </div>
    </div>


    <div className='flex  items-center pt-10 gap-30 ml-34'>
        <h1 className='font-semibold text-[26px]'>Exclusive</h1>
        <div>
            <ul className='flex gap-12 font-Poppins'>
                <li >Home
                <hr className='text-gray w-10 ml-[2.9px] h-1' /></li>
                <li>Contact</li>
                <li>About</li>
                      <Link href="/signup"><li>Sign Up</li></Link>

                
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
        <div className='flex gap-2'>
            <img src="Wishlist.png" alt="" />
            <img src="Cart-1.png" alt="" />
        </div>
    </div>
            <div class="h-px bg-[#969696] w-full max-w-7xl mx-auto mt-4 "></div>

    </>
  )
}

export default Navbar
