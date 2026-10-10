import Link from 'next/link';
export default function NotFound(){return <div className="empty-state"><div className="not-found-number">৪০৪</div><h1>দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি</h1><p>লিংকটি ভুল হতে পারে অথবা পেজটি সরানো হয়েছে।</p><Link className="button" href="/">হোম পেজে ফিরে যান</Link></div>}
