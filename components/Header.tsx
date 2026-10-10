'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { categories, bn, fallbackProducts } from '@/lib/products';
import toast from 'react-hot-toast';
export default function Header(){
 const path=usePathname(); const router=useRouter(); const {data:session}=authClient.useSession(); const [menu,setMenu]=useState(false);
 const ticker=[...fallbackProducts].slice(0,8);
 async function signOut(){await authClient.signOut();toast.success('সাইন আউট সম্পন্ন হয়েছে');setMenu(false);router.push('/');router.refresh()}
 return <header className="site-header">
  <div className="topbar wrap"><Link className="brand" href="/"><span className="brand-mark">🛒</span><span><b>বাজার দর</b><small>শনিবার, ১০ অক্টোবর, ২০২৬</small></span></Link>
  <div className="auth-actions">{session?.user ? <div className="user-wrap"><button className="user-button" onClick={()=>setMenu(!menu)}><span className="avatar">{session.user.name?.slice(0,1)||'👤'}</span><span>{session.user.name||'আমার অ্যাকাউন্ট'}</span><span>⌄</span></button>{menu&&<div className="user-menu"><b>{session.user.name}</b><small>{session.user.email}</small><Link href="/profile" onClick={()=>setMenu(false)}>👤 আমার প্রোফাইল</Link><button className="signout" onClick={signOut}>↪ সাইন আউট</button></div>}</div>:<><Link className="signin-link" href="/signin">সাইন ইন</Link><Link className="button button-small" href="/signup">সাইন আপ</Link></>}</div></div>
  <nav className="category-nav"><div className="wrap nav-inner"><Link className={path==='/'?'nav-link active':'nav-link'} href="/">⌂ হোম</Link>{categories.map(c=><Link key={c.slug} className={path===`/category/${c.slug}`?'nav-link active':'nav-link'} href={`/category/${c.slug}`}>{c.emoji} {c.name}</Link>)}</div></nav>
  <div className="ticker" aria-label="বাজার দর পরিবর্তন"><div className="ticker-track">{[...ticker,...ticker].map((p,i)=><span className="ticker-item" key={`${p.id}-${i}`}>{p.emoji} {p.name} <b>{bn(p.price)} টাকা/{p.unit.replace('প্রতি ','')}</b> <strong className={p.change>0?'down':p.change<0?'up':'flat'}>{p.change>0?'▲':p.change<0?'▼':'—'} {bn(Math.abs(p.change))}%</strong></span>)}</div></div>
 </header>
}
