"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProductGallery = ({ imageUrls, product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="absolute top-1/2 translate-y-[-50%] left-5">
        <Image src={imageUrls} width={60} height={60} />
      </div>
    </>
  );
};

export default ProductGallery;
