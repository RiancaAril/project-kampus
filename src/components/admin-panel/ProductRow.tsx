import { Iproduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType{
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: Iproduct
}

const ProductRow = ({srNo, setOpenPopup, setUpdateTable, product}: PropsType) => {

    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)
    }

    const onDelete = () => {
        const payload = {
            fileKey: product.fileKey,
        };

        axios
        .delete("/api/uploadthing", { data: payload})
        .then((res) => {
            console.log(res.data);

            axios
            .delete(`/api/delete_product/${product._id}`)
            .then((res) => {
                console.log(res.data);
                makeToast("Product berhasil dihapus!");
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
        })
        .catch((err) => console.log(err));

    }


  return (
    <tr>
        <td>
            <div>{srNo}</div>
        </td>
        <td>
            <div>{product.name}</div>
        </td>
        <td>$ {product.price}</td>
        <td className="py-2">
            <img
            src={product.imgSrc}
            width={40}
            height={40}
            alt="product_image"
            />
        </td>
        <td>
            <div className="text-2xl flex items-center gap-2 text-gray-600">
                <CiEdit className="cursor-pointer hover:text-black" onClick={onEdit}/>
                <RiDeleteBin5Line className="text-[20px] cursor-pointer hover:text-red-600" onClick={onDelete}/>
            </div>
        </td>
    </tr>
  )
}

export default ProductRow
