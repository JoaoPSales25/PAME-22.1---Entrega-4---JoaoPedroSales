import styled from "styled-components";

export const ToDoContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;

`;

export const ToDoButtons =  styled.div`
    margin-top: 20px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;

`;

export const ToDoAdd = styled.button`
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  font-weight: bold;
`;

export const ToDoComplete = styled.button`
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  font-weight: bold;
`;

export const ToDoInputProduct = styled.input`
  font-size: 18px;
  width: 300px;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
`;

export const ToDoInputQuantity = styled.input`
font-size: 18px;
  width: 300px;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
`;