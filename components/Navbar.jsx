/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar = ({ isLogout = false }) => {
    return (
        <div className="w-[96%] flex justify-between bg-zinc-800 shadow-lg font-mont p-8 text-xl absolute left-1/2 -translate-x-1/2 top-10 rounded-xl text-white items-center">
            <Link href={"/"} passHref>
                <img src="/static/logo.png" className="font-bold cursor-pointer h-10" alt="E-mediate"/>
            </Link>
            {!isLogout && (
                <Link href={"/login"} passHref>
                    <div className="cursor-pointer">Judge / Admin</div>
                </Link>
            )}

            {isLogout && (
                <Link href={"/"} passHref>
                    <div className="cursor-pointer">Logout</div>
                </Link>
            )}
        </div>
    );
};

export default Navbar;
