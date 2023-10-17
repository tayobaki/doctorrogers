import { useStateContext } from "@/context/StateContext";
import Image from "next/image";

const Cart = () => {
  const { cart, setCart, cartItems } = useStateContext();
  return (
    <div className="fixed z-50 top-2 right-6 h-[97%] w-[37%] rounded-3xl bg-real  overflow-hidden ">
      <div className=" ">
        <div className="text-center relative flex items-center justify-center gap-6 pt-3 border-b pb-3">
          <h1 className=" uppercase font-bold text-3xl">your cart</h1>
          <p
            onClick={() => setCart(false)}
            className=" cursor-pointer text-2xl font-bold absolute right-5"
          >
            X
          </p>
        </div>
        <div className="p-5 ">
          lorfre
          {cartItems?.length < 1 && (
            <div className=" h-full w-full flex items-center justify-center">
              Your cart is empty
            </div>
          )}
          
          {cartItems?.length >= 1 &&
            cartItems?.map((items) => (
              <div
                key={items?.slug}
                className="flex flex-col sm:flex-row sm:items-center justify-between items-start  h-full"
              >
                <Image
                  width={300}
                  height={150}
                  alt={items?.title}
                  src={items?.image}
                />
                <div className="flex h-full items-center">
                  <div className=" font-medium space-y-1">
                    <h3>{items?.title}</h3>
                    <p>{items?.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className=" text-xl cursor-pointer" onClick={decQty}>
                    -
                  </span>
                  <div className="">{qty}</div>
                  <span className=" text-xl cursor-pointer" onClick={incQty}>
                    +
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
