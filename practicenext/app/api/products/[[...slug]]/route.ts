import { fetchAllProducts, fetchFilterdProducts } from "@/libs/actions/productActions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    try {

        const { searchParams } = new URL(request.nextUrl)
        const queryParams = Object.fromEntries(searchParams.entries());
        const isAll = queryParams.hasOwnProperty("isAll")
        let data;
        if (isAll)
            data = await fetchAllProducts();
        else
            data = await fetchFilterdProducts(queryParams);
        return NextResponse.json({
            message: "suceesfull",
            data: data
        });
    } catch (error: any) {
        throw new Error(`Error while fetching the data ${error}`);
    }
}
