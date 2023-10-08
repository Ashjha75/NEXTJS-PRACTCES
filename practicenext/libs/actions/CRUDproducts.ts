import { Query } from "mongoose";
import { connectDb } from "../connectDB";
import Products from "../models/productdata";
import { Page } from "../types";


// INSERT PRODUCTS
export async function createProduct() {
    try {
        connectDb();
        // const data =await Products.create({
        //     "id": 33,
        //     "title": "iPhone XX",
        //     "description": "An apple mobile which is nothing like apple",
        //     "price": 549,
        //     "discountPercentage": 12.96,
        //     "rating": 4.69,
        //     "stock": 94,
        //     "brand": "Apple",
        //     "category": "smartphones",
        //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        //     "images": [
        //         "https://i.dummyjson.com/data/products/1/1.jpg",
        //         "https://i.dummyjson.com/data/products/1/2.jpg",
        //         "https://i.dummyjson.com/data/products/1/3.jpg",
        //         "https://i.dummyjson.com/data/products/1/4.jpg",
        //         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        //     ],
        // })
        const datas = new Products({
            "id": 33,
            "title": "iPhone XX",
            "description": "An apple mobile which is nothing like apple",
            "price": 52249,
            "discountPercentage": 12.96,
            "rating": 42.69,
            "stock": 91334,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ],
        })
        const data = await datas.save();
        return data;

    } catch (error: any) {
        throw new Error(`Error while creating Product ${error}`)
    }
}

export async function getAllUser(queryParams: Page) {
    try {

        await connectDb();
        const page = queryParams.page;
        // const limit = queryParams.limit;
        const limit = 30;
        const skip = (page - 1) * limit;
        if (page < 1 && limit < 1) {
            return;
        }

        else {
            // const allProduct = await Products.find({}).skip(skip).limit(limit);
            const allProduct = await Products.find({ brand: { $regex: '[aA]' } })

            const count = await Products.countDocuments();
            const totalPages = Math.ceil(count / limit);
            const pageInfo = {
                currentPage: page,
                perPage: limit,
                totalPages
            }
            return { allProduct, pageInfo };
        }
    } catch (error: any) {
        throw new Error(`Error while finding Product ${error}`)

    }
}

export async function updateProduct(queryParams: Page) {
    try {
        await connectDb();
        const page = queryParams.page;
        // const limit = queryParams.limit;
        const limit = 30;
        const skip = (page - 1) * limit;
        if (page < 1 && limit < 1) {
            return;
        }
        const data = await Products.updateOne({ id: 1 }, { $push: { images: { $each: ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg'], $slice: 2 } } })
        const allProduct = await Products.find({ id: 1 })
        const count = await Products.countDocuments();
        const totalPages = Math.ceil(count / limit);
        const pageInfo = {
            currentPage: page,
            perPage: limit,
            totalPages
        }
        return { allProduct, pageInfo };
    } catch (error: any) {
        throw new Error(`Error while updating Product ${error}`)
    }
}






