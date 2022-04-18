import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, query,orderByChild, equalTo } from "firebase/database";
import { v4 } from 'uuid'
import getFileContents from './api/utils/getFileContents.js'

const firebaseConfig = {
    apiKey: "AIzaSyDb1IV-QQJt43p7ws69OPucA_dqE9YZXUY",
    authDomain: "giftzen.firebaseapp.com",
    databaseURL: "https://giftzen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "giftzen",
    storageBucket: "giftzen.appspot.com",
    messagingSenderId: "364641230334",
    appId: "1:364641230334:web:b2dcc406ca3e725861b4af",
    measurementId: "G-CND3M3LJ8D"
};


const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


// const importGifts = () => {
//     const categories = {
//         man: 'c31659b1-0862-4c5c-ab95-3e8a33c4b1f5',
//         valentines: '598b84af-6bba-4a41-8d8b-a6ba99bf38c8',
//         birthday: '6e0021dd-896b-4900-ada5-0346638eaf20',
//         woman: '8b7fa9d5-dd0c-4b1b-b1b8-37c7946618e5',
//         christmas: 'afd61aaf-220c-4501-b3f5-1327cb0b2212',
//         anniversary: 'd60fd994-a6a9-4375-bdbf-e04cb9210600'
//     };
//     const getFileName = (category, type = '') => `search_${category}_gifts.json`
//
//
//     function writeGift(gift) {
//         const db = getDatabase(app);
//         set(ref(db, 'gift/' + gift.id), gift);
//     }
//
//     for(const [category, id] of Object.entries(categories)) {
//         const fileName = getFileName(category);
//         const contents = getFileContents(fileName);
//         for (const gift of contents.results) {
//             const giftWithIds = {
//                 ...gift,
//                 id: v4(),
//                 categoryId: id
//             }
//             writeGift(giftWithIds);
//         }
//     }
// }
// importGifts();
// function writeCategory(categoryName) {
//     const db = getDatabase(app);
//     set(ref(db, 'category/' + v4()), categoryName);
// }

// writeCategory('man');

// const categories = ['woman', 'christmas', 'valentines', 'anniversary', 'birthday']
// const init = async () => {
//     for (const categoryName of categories) {
//         const res = await writeCategory(categoryName);
//         console.log({res});
//     }
// }
// init();

// get categories from firebase realtime database
// const readCategories = async () => {
//     const db = getDatabase(app);
//     const categoriesRef = await ref(db, 'category');
//     const categories = await onValue(categoriesRef, (snapshot) => {
//         const categoriesByName = Object.entries(snapshot.val()).reduce((col,[key, value]) => {
//             return {
//                 ...col,
//                 [value]: key
//             }
//         }, {});
//         console.log({categoriesByName});
//     });
// }
//
// readCategories();
//
// const readGifts = async () => {
//     const db = getDatabase(app);
//     const giftsRef = await ref(db, 'gift/?categoryId=8b7fa9d5-dd0c-4b1b-b1b8-37c7946618e5');
//     const gifts = await onValue(giftsRef, (snapshot) => {
//
//         console.log(Object.keys(snapshot.val()).length);
//     });
// }
// readGifts();

// query gifts by category
// const queryGiftsByCategoryId = async (categoryId) => {
//     const db = getDatabase(app);
//     const giftsRef = await ref(db, 'gift');
//     const fitleredRef = query(giftsRef, orderByChild('categoryId'), equalTo(categoryId))
//
//     onValue(fitleredRef, (snapshot) => {
//         console.log(Object.keys(snapshot.val()).length);
//     }, {
//         once: true
//     });
//     const categoryRef = await ref(db, 'category/' + categoryId);
//     await onValue(categoryRef, (snapshot) => {
//         console.log(snapshot.val());
//     }, {
//         once: true
//     });
// }

// queryGiftsByCategoryId("afd61aaf-220c-4501-b3f5-1327cb0b2212");
