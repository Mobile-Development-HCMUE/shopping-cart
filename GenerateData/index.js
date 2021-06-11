const faker = require("faker");
faker.locale = "vi";
const firebase = require("firebase");
const fetch = require("node-fetch");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyBn2uNfYA1Sxegx2lYpzmjqkLaE_VfeZvE",
    authDomain: "test-b067a.firebaseapp.com",
    projectId: "test-b067a",
});

Math.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const product = firebase.firestore().collection("product_detail");
const proGe = faker.commerce;
// for (i = 0; i < 3; ++i) {
//     faker.seed(i);
//     var exam = {
//         name: proGe.productName(),
//         price: proGe.price(),
//         summary: proGe.productDescription(),
//         daban: faker.datatype.number(),
//         rate: Math.randomInt(0, 6),
//     };
//     console.log(exam);
//     // product
//     //     .add(exam)
//     //     .then((doc) => console.log("Document written with ID: ", docRef.id))
//     //     .catch((error) => console.log(error));
// }

let res = [];
const url =
    "https://shopee.vn/api/v4/search/search_items?" +
    new URLSearchParams({
        by: "relevancy",
        limit: "20",
        keyword: "cho bé",
        newest: "0",
        order: "desc",
        page_type: "search",
        scenario: "PAGE_GLOBAL_SEARCH",
        version: "2",
    });
console.log(url);

fetch(url, {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => {
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
    })
    .then((data) => {
        Object.keys(data.items).map((u, i) => {
            let e = data.items[u].item_basic;
            let url0 =
                "https://shopee.vn/api/v2/item/get?itemid=" +
                e.itemid +
                "&shopid=" +
                e.shopid;
            fetch(url0, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "User-Agent":
                        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 ",
                    "X-API-SOURCE": "rweb",
                },
            })
                .then((response) => {
                    const contentType = response.headers.get("content-type");
                    if (
                        !contentType ||
                        !contentType.includes("application/json")
                    ) {
                        throw new TypeError("Oops, we haven't got JSON!");
                    }
                    return response.json();
                })
                .then((data) => {
                    let o = data.item;
                    delete o.label_ids;
                    console.log(o.image);
                    product
                        .add(o)
                        .then((docFef) =>
                            console.log("Document written success", i)
                        )

                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                });
            // const j = {
            //     itemid: e.itemid,
            //     name: e.name,
            //     image: e.image,
            //     images: e.images,
            //     currency: e.currency,
            //     stock:e.stock,
            //     ctime: e.ctime,
            //     liked_count: e.liked_count,
            //     view_count: e.view_count,
            //     price: e.price,
            //     price_min: e.price_min,
            //     price_max: e.price_max,
            //     discount: e.discount,
            //     historical_sold: e.historical_sold;
            //     item_rating: e.item_rating.rating_star,
            //     rating_count: e.item_rating.rating_count,
            // };
            // console.log(j);
        });
    })
    .catch((error) => console.error("Error adding document: ", error));
