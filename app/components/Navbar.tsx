import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexbetween navbar">
      <div className="flex-1 flexStart gap-10 ">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexible" width={115} height={43} />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <li key={link.text}>
              <Link href={link.href} className="hover:text-primary">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;