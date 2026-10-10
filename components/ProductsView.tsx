'use client';
import { useMemo,useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product,bn } from '@/lib/products';
export default function ProductsView({products}:{products:Product[]}){const [sort,setSort]=useState('default');const sorted=useMemo(()=>{const a=[...products];if(sort==='asc')a.sort((x,y)=>x.price-y.price);if(sort==='desc')a.sort((x,y)=>y.price-x.price);return a},[products,sort]);return <><div className="sort-row"><label htmlFor="sort">সাজান</label><select id="sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="default">ডিফল্ট</option><option value="asc">দাম: কম থেকে বেশি</option><option value="desc">দাম: বেশি থেকে কম</option></select></div><p className="result-count">মোট {bn(sorted.length)}টি পণ্য দেখানো হচ্ছে</p><div className="product-grid">{sorted.map(p=><ProductCard key={p.id} product={p}/>)}</div></>}
