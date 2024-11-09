// src/components/Navbar.js
"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-10">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
