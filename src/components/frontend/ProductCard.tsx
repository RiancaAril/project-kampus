import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cartSlice';
import { makeToast } from '@/utils/helper';

interface PropsType {
  id: string;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, img, category, title, price }: PropsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
    makeToast("Tambahkan ke Keranjang");
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md flex flex-col justify-between">
      <div className="text-center border-b border-gray-200 p-4 h-48 flex items-center justify-center bg-gray-50">
        <img className="inline-block max-h-full max-w-full" src={img} alt={title} />
      </div>

      <div className="px-6 py-4 flex-grow flex flex-col">
        <p className="text-gray-500 text-[14px] font-medium mb-2 h-5 overflow-hidden">{category}</p>
        <h2 className="font-medium text-lg h-12 overflow-hidden leading-tight mb-3">{title}</h2>

        <div className="mt-auto">
          <div className="flex items-center text-[#FFF21D] mb-4">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <p className="text-gray-600 text-[14px] ml-2">3 Review</p>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="font-medium text-accent text-xl">Rp.{price}</h2>
            <button
              onClick={addProductToCart}
              className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent rounded-lg"
            >
              <AiOutlineShoppingCart /> Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;