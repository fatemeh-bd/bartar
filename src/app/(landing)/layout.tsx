import React from 'react';
import Header from './_components/header/Header';
import Footer from './_components/footer/Footer';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-auto p-5 max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
}
