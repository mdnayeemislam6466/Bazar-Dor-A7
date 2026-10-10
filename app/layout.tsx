import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = { title: 'বাজার দর | আজকের বাজারের দাম', description: 'বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর এক নজরে দেখুন।' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body><Header/><main className="main-content">{children}</main><Footer/><Toaster position="top-center"/></body></html>}
