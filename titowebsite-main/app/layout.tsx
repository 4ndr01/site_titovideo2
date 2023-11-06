"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from "./Providers";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {useRouter} from "next/navigation";
const inter = Inter({ subsets: ['latin'] })
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Hero from "@/components/Hero";
import Articles from "@/app/articles/page";
import Portfolio from "@/components/Portfolio";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import Features from "@/components/Features";
import Admin from "@/app/admin/page";

const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');


export default function RootLayout({
  children,const: options = {
    // ...
    }
}:{

  children: React.ReactNode
}) {

  const hideHeaderAndFooter = typeof window !== 'undefined' && window.location.pathname.includes('admin');

  return (
    <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head ><title>Titovideo</title></head>
      <body className="dark:bg-black">
      <NextAuthProvider>
          <Elements stripe={stripePromise}>
          {/* {!hideHeaderAndFooter && <Header />} */}
          <Header />
              {children}
          </Elements>
          <ScrollToTop />
          {/* {!hideHeaderAndFooter && <Footer />} */}
          <Footer />
      </NextAuthProvider>
      </body>
    </html>
  )
}







