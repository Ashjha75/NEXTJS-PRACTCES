import { createProduct, getAllUser, updateProduct } from "@/libs/actions/CRUDproducts";
import { NextRequest, NextResponse } from "next/server";
import { Page } from "@/libs/types";
// export async function POST() {
//     try {
//        const data=createProduct();
//         return NextResponse.json({
//             message:"successfull inserted",
//             data
//         },{status:200})
//     } catch (error: any) {
//         throw new Error(`Error while fetching the data ${error}`);
//     }
// }


// export async function POST(request: NextRequest) {
//     try {
//         const { searchParams } = new URL(request.nextUrl);
//         const querryParams: Page = {
//             page: parseInt(searchParams.get("page") || "1"),
//             limit: parseInt(searchParams.get("limit") || "10")
//         };

//         const data = await getAllUser(querryParams);
//         return NextResponse.json({
//             message: "successfull find",
//             result: data
//         }, { status: 200 })
//     } catch (error: any) {
//         throw new Error(`Error while fetching the data ${error}`);
//     }
// }
export async function POST(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.nextUrl);
        const querryParams: Page = {
            page: parseInt(searchParams.get("page") || "1"),
            limit: parseInt(searchParams.get("limit") || "10")
        };

        const data = await updateProduct(querryParams);
        return NextResponse.json({
            message: "successfull find",
            result: data
        }, { status: 200 })
    } catch (error: any) {
        throw new Error(`Error while fetching the data ${error}`);
    }
}