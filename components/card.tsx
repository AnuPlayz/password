"use client";
import { BackgroundGradient } from "../components/ui/background-gradient";
import React, { useState, useEffect } from "react";

export function Card() {
    const [password, setPassword] = useState("");

    const generatePassword = async () => {
        try {
            const response = await fetch("/api/password");
            const data = await response.json();
            setPassword(data.password);
        } catch (error) {
            console.error("Error generating password:", error);
        }
    };
    useEffect(() => {
        generatePassword();
    }, []);
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Generated Password
                </p>
                <p className="text-center sm:text-xl text-black m-2 dark:text-neutral-200">
                    {password}
                </p>
                <button
                    className="rounded-full pl-4 pr-4 py-1 text-white flex align-center bg-black lg:ml-9 lg:mt-4 ml-4 text-xs font-bold dark:bg-zinc-800"
                    onClick={generatePassword}
                >
                    <span>Generate Now</span>
                </button>
            </BackgroundGradient>
        </div>
    );
}