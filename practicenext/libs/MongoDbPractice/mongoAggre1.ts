
// To find the avgPrice by brand
[
    {
        $match: {
            brand: "Apple",
        },
    },
    {
        $group: {
            _id: {
                brand: "$brand",
                title: "$title",
            },
            totalPrice: {
                $sum: "$price",
            },
        },
    },
    {
        $group: {
            _id: "$_id.brand",
            avgprice: {
                $avg: "$totalPrice",
            },
        },
    },
]


//q: To find the avgPrice by brand and category
// [
//     {
//         $match: {
//             brand: "Apple",
//         },
//     },
//     {
//         $group: {
//             _id: {
//                 brand: "$brand",
//                 title: "$title",
//                 category: "$category",
//             },
//             totalPrice: {
//                 $sum: "$price",
//             },
//         },
//     },
//     {
//         $group: {
//             _id: {
//                 brand: "$_id.brand",
//                 category: "$_id.category",
//             },
//             avgprice: {
//                 $avg: "$totalPrice",
//             },
//         },
//     },
// ];
