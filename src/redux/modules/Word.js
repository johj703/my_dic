// bucket.js
import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

// Actions
const LOAD = "Word/LOAD";
const CREATE = 'Word/CREATE';

const initialState = {
    list: [
        { 단어: "Apple", 설명: "사과", 예시: "사과는 맛있어"}
    ],
};

// Action Creators
export function loadWord(dictionary) {
    return {type: LOAD, dictionary};
}

export function addWord(단어) {
    console.log("단어를 추가 하겠다!");
    return { type: CREATE, 단어: 단어 };
}

// middlewares
export const loadWordFB = () => {
    return async function (dispatch) {
       const word_data = await getDocs(collection(db, "word"));
       console.log(word_data);

       let dictionaryList = [];

       word_data.forEach((w) => {
        console.log(w.data());
        dictionaryList.push({id:w.id, ...w.data()});
       });

       console.log(dictionaryList);

       dispatch(loadWord(dictionaryList));
    };
};

export const addWordFB = (word) => {
    return async function (dispatch) {
       const docRef = await addDoc(collection(db, "word"), word);
       const _word = await getDoc(docRef);
       const word_data = {id: _word.id, ... _word.data()};

       console.log(word_data);
    
       console.log((await getDoc(docRef)).data());
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "Word/LOAD": {
            return {list: action.dictionary};
        }
        case "Word/CREATE": {
            console.log("단어를 추가 하겠다!");
            console.log(action);
            const new_word = [...state.list, action.단어];
            return { list: new_word };
        }

        default:
            return state;
    }
}