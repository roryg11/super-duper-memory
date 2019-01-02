import React from "react";
import styled from "styled-components";

const OuterBoxImage = styled.div`
    display: flex;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    height: 500px;
    width: 100%;
`

const InnerBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 10em;
`

const InnerBoxShadow = styled(InnerBox)`
    background-color: black;
    color: white;
    opacity: 0;
    &:hover{
        transition: ease-in .5s;
        background-color: black;
        opacity: .7;
    }
`

const InnerBoxShadowText = styled.span`
    margin: 20px;
    color: white;
`

const BoldText = styled(InnerBoxShadowText)`
    font-weight: bold;
`

const ImageHero = (props) => {
    console.log(props.backgroundImg);
    return (  
    <OuterBoxImage backgroundImg={props.backgroundImg}>
        <InnerBox>
          <BoldText>{props.answer}</BoldText>
        </InnerBox>
        <InnerBoxShadow>
          <InnerBoxShadowText>{props.date.toString()}</InnerBoxShadowText>
          <InnerBoxShadowText>{props.description}</InnerBoxShadowText>
        </InnerBoxShadow>
      </OuterBoxImage>)
}

export default ImageHero;