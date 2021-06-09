const faker = require("faker/locale/vi");
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyBn2uNfYA1Sxegx2lYpzmjqkLaE_VfeZvE",
    authDomain: "test-b067a.firebaseapp.com",
    projectId: "test-b067a",
});

const product = firebase.firestore().collection("product");
const proGe = faker.commerce;
for (i = 0; i < 3; ++i) {
    faker.seed(i);
    var exam = {
        name: proGe.productName(),
        price: proGe.price(),
        summary: proGe.productDescription(),
    };
    product
        .add(exam)
        .then((doc) => console.log("Document written with ID: ", docRef.id))
        .catch((error) => console.log(error));
}
