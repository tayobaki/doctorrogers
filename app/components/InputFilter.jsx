"use client";

// import { useState, useEffect, useRef } from "react";
import { searchResults } from "../constants/data";
import { AiOutlineClose } from "react-icons/ai";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

export default function Example() {
  const [selected, setSelected] = useState(searchResults);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? searchResults
      : searchResults.filter((product) =>
          product.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="relative w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative bg-white w-full cursor-default overflow-hidden  text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-2 border-black py-3 pl-3 pr-10 text-sm leading-5 focus:ring-0"
              displayValue={(product) => product.title}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <div className="">
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((product) => (
                    <>
                      <Combobox.Option
                        key={product.href}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4   ${
                            active ? " bg-gray text-white" : "text-black w-full"
                          }`
                        }
                        value={product}
                      >
                        {({ selected, active }) => (
                          <>
                            <Link
                              href={`${product.href}`}
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {product.title}
                            </Link>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-gray"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>

                      {/* <Combobox.Option
                        key={product.href}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4   ${
                            active ? " bg-gray text-white" : "text-black"
                          }`
                        }
                        value={product}
                      >
                        {({ selected, active }) => (
                          <>
                            <Link
                              href={`${product.href}`}
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              <Image src={product?.image} width={36} height={17} />
                            </Link>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-gray"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option> */}
                    </>
                  ))
                )}
              </Combobox.Options>
            </div>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
