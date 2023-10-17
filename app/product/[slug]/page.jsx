"use client";
import { getSingleProduct } from "@/lib";
import Image from "next/image";
import ProductGallery from "./ProductGallery";
import { useStateContext } from "@/context/StateContext";

const ProductPage = ({ params: { slug } }) => {
  const product = getSingleProduct(slug);
  const { qty, incQty, decQty, addToCart, setCart } = useStateContext();

  const urlString = product?.img;
  return (
    <section className="xl:mx-10 pb-5 mr-5">
      <div className=" grid grid-cols-2 items-start justify-between lg:gap-0 ">
        <div className=" aspect-video w-full relative h-full">
          {product && (
            <div className=" -z-50 hidden md:block">
              {urlString && (
                <ProductGallery product={product} imageUrls={urlString} />
              )}
            </div>
          )}

          <Image
            src={product.img}
            alt={product.title}
            className=" w-full
          aspect-video object-cover h-1/2  lg:h-full"
          />
        </div>
        <div className="  ml-3 sm:ml-5 sm:mr-3 lg:ml-20 lg:mr-32">
          <h1 className=" md:text-4xl font-normal">{product.title}</h1>

          <div className=" md:text-2xl my-5 flex items-center gap-7">
            <span>{product.price}</span>
            <span className=" text-xs">511 Review</span>
          </div>

          <p className=" md:text-sm text-xs my-4">
            For injured and irritated skin of all types, Restore Healing Balm is
            the answer. Created to heal sensitive post-procedural skin, this
            balm is just as effective at repairing and protecting cuts, burns,
            irritated, dry or chapped skin. Multiple sizes to go everywhere with
            you, this versatile balm is a true must-have. It works wonders on
            eczema, too.
          </p>

          <div className="flex flex-col  text-xs italic font-light gap-0.5 ">
            <span className="line-clamp-1 border-b border-black w-fit">
              National Eczema Association - Seal of Acceptance
            </span>
            <span className="line-clamp-1 border-b border-black w-fit">
              goop - Best (Clean) Do-It All Beauty Balm
            </span>
            <span className="line-clamp-1 border-b border-black w-fit">
              Allure - Best Balm for Moisturizing Dry Skin{" "}
            </span>
            <span className="line-clamp-1 border-b border-black w-fit">
              NewBeauty - Best Post-Procedure Essentials
            </span>
          </div>

          <div className="mt-5 text-sm flex flex-row md:flex-col gap-3 flex-wrap items-start">
            <h6 className=" uppercase md:my-4">size</h6>
            <div className="flex  items-center gap-2 md:gap-3 flex-wrap flex-auto md:max-w-sm ">
              <button className=" border border-black hover:bg-[#D8D0C7] w-auto h-auto md:px-5 md:py-2 py-0.5 px-2">
                5 g
              </button>
              <button className=" border border-black hover:bg-[#D8D0C7] w-auto h-auto  md:px-5 md:py-2 py-0.5 px-2">
                4 oz
              </button>
              <button className=" border border-black hover:bg-[#D8D0C7] w-auto h-auto  md:px-5 md:py-2 py-0.5 px-2">
                1 oz
              </button>
              <button className=" border border-black hover:bg-[#D8D0C7] w-auto h-auto  md:px-5 md:py-2 py-0.5 px-2">
                0.5 oz
              </button>
              <button className=" border border-black hover:bg-[#D8D0C7] w-auto h-auto  md:px-5 md:py-2 py-0.5 px-2">
                5g - 3 each
              </button>
            </div>
          </div>
          <div className=" mt-5 flex sm:flex-row flex-col items-center gap-4  md:gap-7 text-xs ">
            <div className="flex flex-1 whitespace-nowrap items-center justify-between  border border-black sm:w-32 w-full  py-3 px-3">
              <button onClick={decQty}>-</button>
              <div>{qty}</div>
              <button onClick={incQty}>+</button>
            </div>

            <button
              onClick={() => {
                addToCart(product, qty);
                setCart(true)
              }}
              className="uppercase  flex items-center justify-center text-white flex-1  bg-[#B7B7B7] w-full py-3 whitespace-nowrap"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
