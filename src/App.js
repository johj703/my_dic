import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadWordFB, addWordFB } from "./redux/modules/Word";
// 컴포넌트
import PlusWord from "./PlusWord";
import MyDicMain from "./MyDicMain";
import {db} from "./firebase";
import { collection,
         doc, 
         getDoc, 
         getDocs, 
         addDoc, 
         updateDoc, 
         deleteDoc 
} from "firebase/firestore";

function App() {
  const [list] = React.useState([
    "Apple",
    "Bucket",
    "Car",
    "Duck"
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();

  React.useEffect(async() => {
    dispatch(loadWordFB());
  }, []);

  const addWord = () => {
    // dispatch(createWord({ text: text.current.value, completed: false}));

    dispatch(addWordFB({ text: text.current.value, completed: false}))
  }
  return (
    <div className="App">
      <Container>
        <Title>MY DICTIONARY</Title>
        <Routes>
          <Route path='/*' element={<MyDicMain list={list} />} />
          <Route path='/PlusWord' element={<PlusWord />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #AFEEEE;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h2`
color: black;
text-align: center;
`;

export default App;
