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

async function myFetch(url, dataid) {
    let res = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    return await Promise.all([res.json(), dataid]);
}

product
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const productid = doc.id;
            product
                .doc(productid)
                .update({ itemid: productid })
                .then(() => {
                    console.log("update success!");
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
        });
    })
    .catch((error) => console.error("Error adding document: ", error));
