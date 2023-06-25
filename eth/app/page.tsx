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
        <body>
          <div className="grid grid-cols-2 min-h-screen bg-white">
            <div className="bg-purple-100 rounded-lg p-14 m-14 h-[32rem]">
              <div>
                <h1 className="text-blue-900 antialiased font-bold text-3xl tracking-wider">
                  Welcome to Art.io
                </h1>
                <p className="pt-5 font-light">
                  Our platform is designed to empower artists like you to
                  showcase and sell your unique digital creations as
                  non-fungible tokens (NFTs).
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
                </p>
              </div>
              <ul className="m-5 underline-offset-auto text-center"> hello </ul>
            </div>
            <div className="bg-white">
              <div className="bg-pink-100 p-10 mt-7 h-48">
                <div>022</div>
              </div>
            </div>
          </div>
        </body>
        <HelloWorldComponent />
      </>
    </main>
  );
}
