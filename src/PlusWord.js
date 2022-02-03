import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addWord, addWordFB} from "./redux/modules/Word";
import {useNavigate} from "react-router-dom";

const PlusWord = (props) => {
    const 단어 = React.useRef(null);
    const 설명 = React.useRef(null);
    const 예시 = React.useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h3>단어 추가하기</h3>

            <div>
                <h5>단어</h5>
                <input type="text" ref={단어} />

                <h5>설명</h5>
                <input type="text" ref={설명} />

                <h5>예시</h5>
                <input type="text" ref={예시} />
            </div>

            <button onClick={() => {
                console.log("단어를 추가했어!");
                
                dispatch(addWordFB({
                    단어: 단어.current.value,
                    설명: 설명.current.value,
                    예시: 예시.current.value
                }));

                navigate("/");
            }}>추가하기</button>
        </div>
    );
};

const button = styled.div`
margin: 20px 0px 0px 0px;
`;

export default PlusWord;