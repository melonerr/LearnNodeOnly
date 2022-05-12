const admin = require('../node_modules/firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


exports.GetData = async(collection) => {
    let data = [];
    await db.collection(collection).get()
        .then((response) => {
            response.forEach((doc) => {
                data.push(doc.data())
            })
        });
    return data;
};