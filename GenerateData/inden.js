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

const product = firebase.firestore().collection("product");
const proGe = faker.commerce;
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
product
    .limit(10)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            productid = doc.data().itemid;
            shopid = doc.data().shopid;
            dataid = doc.id;
            let url0 =
                "https://shopee.vn/api/v2/item/get?itemid=" +
                productid +
                "&shopid=" +
                shopid;
            fetch(url0, {
                method: "GET",
                headers: {
                    Accept: "application/json",
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
                    let e = {
                        description: o.description,
                        attributes: o.attributes,
                        models: o.models,
                    };
                    product
                        .doc(dataid)
                        .update(e)
                        .then((docFef) =>
                            console.log("Document written success", dataid)
                        )

                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                });
        });
    })
    .catch((error) => console.error("Error adding document: ", error));
