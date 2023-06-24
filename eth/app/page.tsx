"use client";

import Image from 'next/image'
import Card from '../src/card/card'
import HelloWorldComponent from '@/src/HelloWorldComponent';
import React, { useEffect } from 'react';
export default function Home() {
  return <main className="min-h-screen items-center">
    <p>ddlfer</p>
    <HelloWorldComponent/>
  </main>;
}
