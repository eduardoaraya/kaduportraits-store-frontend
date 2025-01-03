"use client";

import { PropsWithChildren, ReactPropTypes } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-[225px]">{children}</main>
      <Footer />
    </>
  );
}
