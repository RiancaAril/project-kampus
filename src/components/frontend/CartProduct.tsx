import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { RxCross1 } from "react-icons/rx";

interface PropsType{
    id: string;
    img: string;
    title: string;
    price: number;
    quantity: number;
}

const CartProduct: React.FC<PropsType> = ({
    id,
    img,
    title,
    price,
    quantity,
}) => {
    const dispatch = useAppDispatch();

    return(
        <div className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center gap-4">
            <img
                className="h-[80px] w-[80px] object-cover rounded"
                src={img}
                alt={title}
            />
            <div className="space-y-1">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">
                    {quantity} x <span className="font-semibold">Rp.{price}</span>
                </p>
            </div>
        </div>
        <RxCross1
            className="text-gray-500 text-lg cursor-pointer hover:text-red-600 transition"
            onClick={() => dispatch(removeFromCart(id))}
        />
    </div>
    
    )

}

export default CartProduct;