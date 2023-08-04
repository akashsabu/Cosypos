import breakfast from "../Asset/Break-Fast.svg";
import soups from "../Asset/soup.svg";
import pasta from "../Asset/pasta.svg";
import sushi from "../Asset/Sushi.svg";
import maincourse from "../Asset/Main-Course.svg";
import desserts from "../Asset/Desserts.svg";
import drinks from "../Asset/Drinks.svg";
import alcohol from "../Asset/Alcohol.svg";
import { styled } from "styled-components";


const categories = [
    {
      category: "Break Fast",
      no: 13,
      color: "#CFDDDB",
      image: breakfast,
    },
    {
      category: "Soups",
      no: 13,
      color: "#E4CDEE",
      image: soups,
    },
    {
      category: "Pasta",
      no: 13,
      color: "#C2DBE9",
      image: pasta,
    },
    {
      category: "Sushi",
      no: 13,
      color: "#C9CAEE",
      image: sushi,
    },
    {
      category: "Main course",
      no: 13,
      color: "#FAC2D9",
      image: maincourse,
    },
    {
      category: "Desserts",
      no: 13,
      color: "#E6DADE",
      image: desserts,
    },
    {
      category: "Drinks",
      no: 13,
      color: "#F0C8CF",
      image: drinks,
    },
    {
      category: "Alcohol",
      no: 13,
      color: "#C3E9DE",
      image: alcohol,
    },
  ];
export default function categorySection() {
    return categories.map((result) => (
        <CategoryDiv key={result.category} style={{ background: result.color }}>
          <img src={result.image} />
          <CatName>{result.category}</CatName>
          <CatNo>{result.no} items</CatNo>
        </CategoryDiv>
      ));
} 

const CategoryDiv = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
`;
const CatName = styled.h4`
margin-top: 5px;

margin-bottom: 0px;
`;

const CatNo = styled.h6`
margin-top: 0px;
`;
