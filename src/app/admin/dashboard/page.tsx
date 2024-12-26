"use client"
import Popup from '@/components/admin-panel/Popup';
import ProductRow from '@/components/admin-panel/ProductRow';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hook';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export interface Iproduct{
    _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLoading(true))

        axios
        .get("/api/get_products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoading(false)));
    
    
    
    }, [updateTable]);




  return (
    <div>
        <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
            <h2 className='text-3xl'>Semua Produk</h2>
            <div className='mt-4 h-[calc(100vh-180px) overflow-y-auto]'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-gray-500 border-t border-[#ececec]'>
                            <th>SR No.</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: Iproduct, index)=> (
                            <ProductRow
                            key={product._id}
                            srNo={index + 1}
                            setOpenPopup={setOpenPopup}
                            setUpdateTable={setUpdateTable}
                            product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {openPopup && (
            <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
        )}
    </div>
  )
}

export default Dashboard
