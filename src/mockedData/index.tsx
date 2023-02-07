import caixaGrandeJBL from "../assets/caixaGrandeJBL.png";
import caixaMiniJBL from "../assets/caixaMiniJBL.png";
import chromeCast from "../assets/chromeCast.png";
import hbomax from "../assets/hbomax.png";
import headsetJBL from "../assets/headsetJBL.png";
import netflix from "../assets/netflix.png";
import smartwatch from "../assets/smartwatch.png";
import spotifyPremium from "../assets/spotifyPremium.png";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const productsListMocked: ProductProps[] = [
  {
    id: 1,
    name: "Caixa G JBL",
    price: 150,
    image: caixaGrandeJBL,
  },
  {
    id: 2,
    name: "Caixa P JBL",
    price: 75,
    image: caixaMiniJBL,
  },
  {
    id: 3,
    name: "Chrome Cast",
    price: 100,
    image: chromeCast,
  },
  {
    id: 4,
    name: "HBOmax",
    price: 25,
    image: hbomax,
  },
  {
    id: 5,
    name: "Headset JBL",
    price: 150,
    image: headsetJBL,
  },
  {
    id: 6,
    name: "Netlix",
    price: 25,
    image: netflix,
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 50,
    image: smartwatch,
  },
  {
    id: 8,
    name: "Spotify Premium",
    price: 25,
    image: spotifyPremium,
  },
];
