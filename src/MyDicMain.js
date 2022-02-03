import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyDicMain = (props) => {
    const my_lists = useSelector((state) => state.word.list);
    const navigate = useNavigate();
    console.log(my_lists);

    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                return (
                    <ItemStyle key={index}>
                        <div>
                            단어
                        </div>
                        <p>
                            {list.단어}
                        </p>
                        <div>
                            설명
                        </div>
                        <p>
                            {list.설명}
                        </p>
                        <div>
                            예시
                        </div>
                        <p>
                            {list.예시}
                        </p>
                    </ItemStyle>
                );
            })}
            <button onClick={() => navigate("/PlusWord")}>추가하기</button>
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;
max_height: 50vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
color: black;
background-color: white;
`;

export default MyDicMain;