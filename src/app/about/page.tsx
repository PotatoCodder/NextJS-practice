// src/pages/about/index.js
"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">Learn more about us on this page.</p>
        <Link href="about/details" legacyBehavior>
          <a className="text-blue-600 underline mt-4 inline-block">More Details</a>
        </Link>
      </div>
    </div>
  );
}
