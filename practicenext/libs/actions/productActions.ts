// q:i want to create the product using productdata model in mongoose

import { connectDb } from "../connectDB";
import Products from "../models/productdata";

interface Props {
    id?: string;
    title?: string;
    description?: string;
    price?: string;
    discountPercentage?: string;
    rating?: string;
    stock?: string;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
}


export async function fetchAllProducts() {
    try {
        await connectDb();
        const AllProducts = await Products.find({});
        return AllProducts;
    } catch (error: any) {
        throw new Error(`Error while fetching all the products ${error}`)
    }
}
export async function fetchFilterdProducts(queryParams: Props) {
    try {
        await connectDb();
        const pipeline = [];

        // if (queryParams.id) {
        //     const ID = parseInt(queryParams.id)
        //     pipeline.push({ $match: { id: ID } });
        // }

        // if (queryParams.title) {
        // const regex = new RegExp(queryParams.title, 'i');
        //     pipeline.push({ $match: { title: { $regex: regex } } });
        // }
        // if (queryParams.description) {
        //     const regex = new RegExp(queryParams.description, 'i');
        //     pipeline.push({ $match: { description: { $regex: regex } } });
        // }

        // if (queryParams.category) {
        //     const regex = new RegExp(queryParams.category, 'i');
        //     pipeline.push({ $match: { category: { $regex: regex } } });
        // }

        // if (queryParams.price) {
        //     const price = parseFloat(queryParams.price);

        //     if (!isNaN(price)) {
        //         pipeline.push({ $match: { $or: [{ price: { $gte: 500 } }, { price: { $lte: price } }] } });
        //     }
        // }

        // if (queryParams.discountPercentage) {
        //     const discountPercentage = parseFloat(queryParams.discountPercentage);

        //     if (!isNaN(discountPercentage)) {
        //         pipeline.push({ $match: { discountPercentage: discountPercentage } });
        //     }
        // }

        // if (queryParams.rating) {
        //     const rating = parseFloat(queryParams.rating);

        //     if (!isNaN(rating)) {
        //         pipeline.push({ $match: { rating: rating } });
        //     }
        // }

        // if (queryParams.stock) {
        //     const stock = parseInt(queryParams.stock);

        //     if (!isNaN(stock)) {
        //         pipeline.push({ $match: { stock: stock } });
        //     }
        // }
        // if (queryParams.brand) {
        //     const regex = new RegExp(queryParams.brand, 'i');
        //     pipeline.push({ $match: { brand: { $regex: regex } } });
        // }


        // unwind : Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
        // pipeline.push({ $unwind: "$images" });
        // pipeline.push({ $group: { _id: "$_id", images: { $push: "$images" } } });




        // $group: Groups the documents by some specified expression and outputs to the next stage a document for each distinct grouping.

        // pipeline.push({ $group: { _id: "$category", count: { $sum: 1 }, avgPrice: { $avg: "$price" } } })
        // pipeline.push({ $sort: { count: -1, avgPrice: -1 } });

        pipeline.push({ $project: { _id: 0 } })
        // pipeline.push({ $project: { _id: 0, brand: 1, price: 1 } });
        // pipeline.push({ $limit: 2 });
        console.log(pipeline)
        const results = await Products.aggregate(pipeline);
        return results;
    } catch (error: any) {
        throw new Error(`Error while fetching all the products ${error}`)
    }
}

// q:explain me about aggregate and its 