// src/app/layout.tsx
"use client";
import '../app/globals.css'
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A sample static page optimized for SEO" />
        <title>My Static Site</title>
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
