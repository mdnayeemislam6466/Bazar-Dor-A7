import Link from 'next/link';
import { getProducts,bn } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
export const revalidate=300;
export default async function Home(){const products=await getProducts();const risers=[...products].filter(p=>p.change>0).sort((a,b)=>b.change-a.change).slice(0,6);const fallers=[...products].filter(p=>p.change<0).sort((a,b)=>a.change-b.change).slice(0,6);return <div className="wrap home-page"><section className="hero"><div className="hero-copy"><span className="eyebrow">শনিবার, ১০ অক্টোবর, ২০২৬</span><h1>আজকের বাজারের দাম এক নজরে</h1><p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তৃত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।</p><Link className="button" href="#সব-পণ্য">সব পণ্য দেখুন <span>↘</span></Link></div><div className="hero-art"><img src="/bazar-hero.png" alt="তাজা সবজির ঝুড়ি"/></div></section>
 <section className="product-section"><h2><span className="red">▲</span> আজ দাম বেড়েছে</h2><div className="product-grid">{risers.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
 <section className="product-section"><h2><span className="green">▼</span> আজ দাম কমেছে</h2><div className="product-grid">{fallers.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
 <section className="product-section" id="সব-পণ্য"><h2>সব পণ্য</h2><p className="section-subtitle">প্রয়োজনীয় নিত্যপণ্যের সর্বশেষ বাজার দর</p><div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
 </div>}
