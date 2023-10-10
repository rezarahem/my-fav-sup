'use client';

import Link from 'next/link';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import HeroForm from './HeroForm';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between px-12 py-3 border-b-2 border-b-cyan-950'>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className='bg-green-500 text-white p-2 rounded text-sm font-medium sm:hidden'
      >
        اضابه کردن هیرو
      </button>

      <Link href='/'>
        <Image src='/sup.png' alt='super-hero' height={50} width={50} />
      </Link>

      {isOpen && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
            <div className='bg-white w-[20rem] px-4 py-3 rounded'>
              <div className='flex justify-between'>
                <h4>اضافه کردن هیرو</h4>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <AiOutlineCloseCircle className='text-red-500' />
                </button>
              </div>
              <br />
              <div>
                <HeroForm />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
