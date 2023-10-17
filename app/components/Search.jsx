import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import InputFilter from "./InputFilter";

const Search = () => {
  const [search, setSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      // Check if the ref is null
      if (searchRef.current) {
        // Close the search bar if the user clicked outside of it
        if (!searchRef.current.contains(event.target)) {
          setSearch(false);
        }
      }
    });
  }, [searchRef]);

  return (
    <div className="">
      <span className=" cursor-pointer" onClick={() => setSearch(true)}>
        search
      </span>

      {search && (
        <motion.div
          initial={{ opacity: 0, paddingTop: 0 }}
          animate={{ opacity: 1, paddingTop: 20 }}
        //   exit={{ opacity: 0, paddingTop: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          ref={searchRef}
          className="absolute bg-mainBg left-0 top-0 py-5 z-50 w-full flex items-center justify-center gap-2"
        >
          <div className=" mx-80 lg:mx-96 flex w-full items-center gap-2">
            <InputFilter search={setSearch} />
           
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Search;
