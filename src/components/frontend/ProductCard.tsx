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
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img className="inline-block" src={img} alt={title} />
      </div>

      <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{title}</h2>

        <div className="mt-3 flex text-[#FFF21D] items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p className="text-gray-600 text-[14px] ml-2">3 Review</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">${price}</h2>
          <button
            onClick={addProductToCart}
            className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
          >
            <AiOutlineShoppingCart /> Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;