import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try{
        const id = URLParams.params.id;


        await  connectMongoDB();

        await Product.findByIdAndDelete(id);

        return NextResponse.json({msg: "data berhasil dihapus!"});
    }catch (error){
        return NextResponse.json({
            error,
            msg: "Ada yang salah browww"
        }, {status: 400}) 
    }
}
    
