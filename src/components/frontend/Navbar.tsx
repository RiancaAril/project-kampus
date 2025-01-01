import { useAppSelector } from "@/redux/hook";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


interface PropsType{
    setShowCart: Dispatch<SetStateAction<boolean>>;

}
const Navbar = ({ setShowCart }: PropsType) => {
    const cartCount = useAppSelector((state) => state.cart.length);


  return (
    <div className="pt-4 bg-white top-0 sticky">
    <div className="container">
        <div className="flex justify-between items-center">
            <div className="text-4xl font-bold">Toko Bojonggede</div>
            <div className="lg:flex hidden w-full max-w-[500px]">
                <input
                    className="border-2 border-accent px-6 py-2 w-full"
                    type="text"
                    placeholder="Cari Produk...."
                />
                <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
                    <BsSearch />
                </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-center">
                <div className="md:flex hidden gap-3 items-center">
                    <div className="rounded-full border-2 border-gray-300 text-slate-500 text-[32px] h-[50px] w-[50px] grid place-items-center">
                        <AiOutlineUser />
                    </div>
                    <div>
                        <p className="text-gray-500">Hallo!, Sign In</p>
                        <p className="font-medium">Akun Anda</p>
                    </div>
                </div>

                <div
                    className="text-gray-500 text-[32px] relative cursor-pointer"
                    onClick={() => setShowCart(true)}
                >
                    <AiOutlineShoppingCart />
                    <div className="absolute top-[-5px] right-[-5px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[12px] flex items-center justify-center">
                        {cartCount}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Navbar
