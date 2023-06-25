"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import Card from "../src/card/card";
import HelloWorldComponent from "@/src/HelloWorldComponent";
import React, { useEffect } from "react";
export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <>
        <main>
          <div className="grid grid-cols-2 min-h-screen bg-white">
            <div className="bg-purple-100 rounded-lg p-14 m-8 h-[34rem]">
              <div>
                <h1 className="text-blue-900 antialiased font-bold text-3xl tracking-wider">
                  Welcome to Art.io
                </h1>
                <p className="pt-5 font-light">
                  Our platform is designed to empower artists like you to
                  showcase and sell your unique digital creations as
                  non-fungible tokens (NFTs).
                </p>
                <br></br>
                <br></br>
                <div className="grid grid-cols-3 gap-6">
                  <div className="image-container">
                    <img
                      className="w-36 h-48"
                      src="https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg"
                      alt="NFT1"
                    />
                    <button className="p-2 mt-5 text-white rounded-lg bg-pink-500 text-center hover:bg-pink-700">
                      See more ⇒
                    </button>
                  </div>
                  <div className="image-container">
                    <img
                      className="w-36 h-48"
                      src="https://zarastro.art/wp-content/uploads/2021/07/Pop-Art-Ancient-Statue-1.jpeg"
                      alt="NFT1"
                    />
                    <button className="p-2 mt-5 text-white rounded-lg bg-rose-400 text-center hover:bg-rose-600">
                      See more ⇒
                    </button>
                  </div>
                  <div className="image-container">
                    <img
                      className="w-36 h-48"
                      src="https://nftcalendar.io/storage/uploads/events/2022/2/dpusazRUqM5jrjrQ0S3L2H19fbCQKxAMefj3INDr.gif"
                      alt="NFT1"
                    />
                    <button className="p-2 mt-5 text-white rounded-lg bg-orange-400 text-center hover:bg-orange-700">
                      See more ⇒
                    </button>
                  </div>
                </div>
              </div>
              <ul className="m-5 underline underline-offset-auto text-center">
                see more trending artists ➪
              </ul>
            </div>
            <div className="bg-white">
              <div className="bg-pink-100 p-10 rounded-lg mt-7 mr-7 h-64">
                <div>
                  <h1 className="text-rose-600 antialiased font-bold text-xl tracking-wide">
                    See Trending Topics
                  </h1>
                  <div className="justify-center my-8 select-none flex">
                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-red-400 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 hover:bg-red-600">
                      Monkey ×
                    </button>

                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-purple-400 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 hover:bg-purple-600">
                      Avatar ×
                    </button>

                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-300 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2 hover:bg-blue-600">
                      Automobiles ×
                    </button>

                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-red-300 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none hover:bg-rose-500">
                      Minimalistics ×
                    </button>
                  </div>
                  <div className="justify-center my-8 select-none flex">
                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-400 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2 hover:bg-orange-700">
                      AI-Generated ×
                    </button>

                    <button className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-500 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none hover:bg-pink-800">
                      Gaming ×
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[17rem] rounded-lg bg-blue-100 mt-7 mr-7 p-10">
                <h2 className="text-indigo-500 antialiased font-bold text-xl tracking-wide">
                  Top Artists
                </h2>
                <div className="mt-2 grid grid-cols-3 gap-6">
                  <div className="bg-gray-100 gap-3 rounded-lg h-44 text-center">
                    <img
                      className="w-16 h-16 mt-5 opacity-60 ml-16"
                      src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
                    ></img>
                    <p className="font-semibold text-pink-400"> bench4805 </p>
                  </div>
                  <div className="bg-gray-100 gap-3 rounded-lg h-44 text-center">
                    <img
                      className="w-16 h-16 mt-5 opacity-60 ml-16"
                      src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
                    ></img>
                    <p className="font-semibold text-purple-400">
                      {" "}
                      elnivae201{" "}
                    </p>
                  </div>
                  <div className="bg-gray-100 gap-3 rounded-lg h-44 text-center">
                    <img
                      className="w-16 h-16 mt-5 opacity-60 ml-16"
                      src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
                    ></img>
                    <p className="font-semibold text-indigo-400">
                      {" "}
                      aneeshyboneechy{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <HelloWorldComponent />
      </>
    </main>
  );
}