import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";
import UploadYourOwn from "../Components/UploadYourOwn/UploadYourOwn";

const items = [
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
  {
    name: "Barady Soul",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ],
    id: "25",
  },
];
const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(0);
  const onHover = useCallback((i: number) => {
    setHoveredItem(i);
  }, []);

  return (
    <div className="container mx-auto ">
      <UploadYourOwn />

      <div
        style={{
          gridTemplateColumns: `repeat(auto-fill, ${"300px"})`,
          gap: "40px",
        }}
        className=" grid  grid-cols-4 gap-y-8 border-b-2 pb-10 container mx-auto "
      >
        {items?.map((item, index) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ProductCard
              onHover={onHover}
              isHovered={index + 1 === hoveredItem}
              src={
                item.images?.[0] ||
                "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              }
              id={index + 1}
              key={index + 1}
              item={item}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
