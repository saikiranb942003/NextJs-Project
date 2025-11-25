"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
]; 


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

   const [input,setInput] = useState("");
    const pathname = usePathname();

    return (
        <h1> Auth layout</h1>
    )
}