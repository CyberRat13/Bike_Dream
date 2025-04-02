'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">CycleFinder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/search" className="text-sm font-medium hover:underline">
            Search
          </Link>
          <Link href="/compare" className="text-sm font-medium hover:underline">
            Compare
          </Link>
          <Link href="/brands" className="text-sm font-medium hover:underline">
            Brands
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
} 