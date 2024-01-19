import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500 '>
        <small className='mb-2 block text-xs'>
            &copy; 2030 <a href="https://zaryabdev.com" target='_blank' className='underline text-gray-700 dark:text-white/60'>zaryabdev.com</a>. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this Website: </span> built with react and Next.js (App Router & Server Actions), Javascript, Tailwind CSS, Framer Motion, React Email & Resend.
        </p>
    </footer>
  )
}

export default Footer
