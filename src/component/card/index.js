import React from "react";
import styled from "styled-components";

const Wcard = (props) => {
    
  const Card = styled.div`
    margin: 0 1.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: palevioletred;
  `;
  const Title = styled.header`
    font-size: 1.5em;
    text-align: center;
  `;
  const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
  `;
  return (
    <>
    <Card data-id="card" onClick={()=>console.log(111)} >
        <Image
          alt="加载中"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic24.nipic.com%2F20121105%2F10600780_092548535141_2.jpg&refer=http%3A%2F%2Fpic24.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625294409&t=cfba77ee44cef1706e925dde06db4b55"
        />
        <Title>1234545</Title>
      </Card>
    </>
  );
};

export default Wcard;
