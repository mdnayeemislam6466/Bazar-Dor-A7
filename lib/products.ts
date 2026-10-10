export type Product = { id: number | string; slug: string; name: string; category: string; categoryName: string; emoji: string; unit: string; price: number; change: number; description?: string; markets?: { market: string; district: string; min: number; max: number; avg: number }[] };

export const fallbackProducts: Product[] = [
 {id:1,slug:'shornomoshuri-chal',name:'স্বর্ণমাছি চাল',category:'chal',categoryName:'চাল',emoji:'🍚',unit:'প্রতি কেজি',price:148,change:2.6,description:'দেশি বাজারে জনপ্রিয় চালের বর্তমান দর।'},
 {id:2,slug:'miniket-chal',name:'মিনিকেট চাল',category:'chal',categoryName:'চাল',emoji:'🍚',unit:'প্রতি কেজি',price:99,change:-2.9},
 {id:3,slug:'nazir-chal',name:'নাজির চাল',category:'chal',categoryName:'চাল',emoji:'🍚',unit:'প্রতি কেজি',price:78,change:0},
 {id:4,slug:'batash-sweat-chal',name:'বাটাম সাইত চাল',category:'chal',categoryName:'চাল',emoji:'🍚',unit:'প্রতি কেজি',price:66,change:3.6},
 {id:5,slug:'mosur-dal',name:'মসুর ডাল',category:'dal',categoryName:'ডাল',emoji:'🫘',unit:'প্রতি কেজি',price:142,change:1.9},
 {id:6,slug:'chola',name:'ছোলা',category:'dal',categoryName:'ডাল',emoji:'🫘',unit:'প্রতি কেজি',price:120,change:-2.4},
 {id:7,slug:'soybean-oil',name:'সয়াবিন তেল',category:'tel',categoryName:'তেল',emoji:'🫙',unit:'প্রতি লিটার',price:172,change:2.1},
 {id:8,slug:'potato',name:'আলু',category:'shobji',categoryName:'সবজি',emoji:'🥔',unit:'প্রতি কেজি',price:30,change:-6.5},
 {id:9,slug:'onion',name:'পেঁয়াজ',category:'shobji',categoryName:'সবজি',emoji:'🧅',unit:'প্রতি কেজি',price:45,change:12.5},
 {id:10,slug:'ginger',name:'আদা',category:'shobji',categoryName:'সবজি',emoji:'🫚',unit:'প্রতি কেজি',price:85,change:9.0},
 {id:11,slug:'eggplant',name:'বেগুন',category:'shobji',categoryName:'সবজি',emoji:'🍆',unit:'প্রতি কেজি',price:44,change:8.4},
 {id:12,slug:'green-chili',name:'কাঁচামরিচ',category:'shobji',categoryName:'সবজি',emoji:'🌶️',unit:'প্রতি কেজি',price:92,change:-4.8},
 {id:13,slug:'rui-fish',name:'রুই মাছ',category:'mach',categoryName:'মাছ',emoji:'🐟',unit:'প্রতি কেজি',price:420,change:4.5},
 {id:14,slug:'ilish-fish',name:'ইলিশ মাছ',category:'mach',categoryName:'মাছ',emoji:'🐟',unit:'প্রতি কেজি',price:1850,change:1.8},
 {id:15,slug:'chicken',name:'ব্রয়লার মুরগি',category:'mangsho',categoryName:'মাংস',emoji:'🍗',unit:'প্রতি কেজি',price:225,change:-3.0},
 {id:16,slug:'beef',name:'গরুর মাংস',category:'mangsho',categoryName:'মাংস',emoji:'🥩',unit:'প্রতি কেজি',price:790,change:-1.2},
 {id:17,slug:'egg',name:'ডিম',category:'dim-dudh',categoryName:'ডিম-দুধ',emoji:'🥚',unit:'প্রতি ডজন',price:158,change:3.9},
 {id:18,slug:'milk',name:'দুধ',category:'dim-dudh',categoryName:'ডিম-দুধ',emoji:'🥛',unit:'প্রতি লিটার',price:102,change:2.0},
 {id:19,slug:'garlic',name:'রসুন',category:'shobji',categoryName:'সবজি',emoji:'🧄',unit:'প্রতি কেজি',price:165,change:-4.6},
 {id:20,slug:'tomato',name:'টমেটো',category:'shobji',categoryName:'সবজি',emoji:'🍅',unit:'প্রতি কেজি',price:38,change:0},
 {id:21,slug:'green-pepper',name:'ক্যাপসিকাম',category:'shobji',categoryName:'সবজি',emoji:'🫑',unit:'প্রতি কেজি',price:80,change:0},
 {id:22,slug:'tilapia',name:'তেলাপিয়া মাছ',category:'mach',categoryName:'মাছ',emoji:'🐟',unit:'প্রতি কেজি',price:280,change:0}
];
export const categories = [{slug:'chal',name:'চাল',emoji:'🍚'},{slug:'dal',name:'ডাল',emoji:'🫘'},{slug:'tel',name:'তেল',emoji:'🫙'},{slug:'shobji',name:'সবজি',emoji:'🥬'},{slug:'mach',name:'মাছ',emoji:'🐟'},{slug:'mangsho',name:'মাংস',emoji:'🍗'},{slug:'dim-dudh',name:'ডিম-দুধ',emoji:'🥛'},{slug:'moshla',name:'মসলা',emoji:'🌶️'}];
export const bn = (n:number) => new Intl.NumberFormat('bn-BD',{maximumFractionDigits:1}).format(n);
export const money = (n:number) => `${new Intl.NumberFormat('bn-BD',{maximumFractionDigits:2}).format(n)} টাকা`;
const text = (...values:any[]) => { for (const v of values) if (v !== undefined && v !== null && String(v).trim() !== '') return v; return undefined; };
const number = (...values:any[]) => { for (const v of values) { if (v !== undefined && v !== null && v !== '') { const n=Number(String(v).replace(/[৳,\s]/g,'')); if(Number.isFinite(n)) return n; } } return undefined; };
const slugify = (s:string) => s.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
function normalizeProduct(p:any,i:number):Product {
 const catValue = p.category && typeof p.category === 'object' ? text(p.category.slug,p.category.id,p.category.name) : p.category;
 const cat = String(text(p.category_slug,p.categorySlug,catValue,p.categoryName,p.category_name,'shobji')).toLowerCase();
 const matched = categories.find(c=>c.slug===cat || c.name===cat || c.slug===slugify(cat));
 const name=String(text(p.name,p.product_name,p.productName,p.title,p.label,p.bn_name,p.bangla_name,typeof p.product==='string'?p.product:undefined,typeof p.product==='object'?p.product.name:undefined,`পণ্য ${i+1}`));
 const id=text(p.id,p.product_id,p.productId,p._id,i+1);
 const price=number(p.price,p.current_price,p.currentPrice,p.today_price,p.todayPrice,p.market_price,p.marketPrice,p.latest_price,p.amount,typeof p.prices==='object'?p.prices.today:undefined,typeof p.price==='object'?p.price.current:undefined) ?? 0;
 let change=number(p.change,p.change_percent,p.changePercent,p.percentage_change,p.percentageChange,p.price_change_percent,p.priceChangePercent,p.change_percentage,p.percent_change,p.changeRate,typeof p.trend==='object'?p.trend.percent:undefined) ?? 0;
 if (!number(p.change,p.change_percent,p.changePercent,p.percentage_change,p.percentageChange,p.price_change_percent,p.priceChangePercent,p.change_percentage,p.percent_change,p.changeRate) ) { const previous=number(p.previous_price,p.previousPrice,p.yesterday_price,p.yesterdayPrice,p.last_price,p.lastPrice); if(previous && previous>0 && price>0) change=((price-previous)/previous)*100; }
 if(p.change_direction==='down' || p.trend==='down') change=-Math.abs(change);
 if(p.change_direction==='up' || p.trend==='up') change=Math.abs(change);
 const unit=String(text(p.unit,p.unit_name,p.unitName,p.measurement,p.quantity_unit,'প্রতি কেজি'));
 const emoji=String(text(p.emoji,p.icon,p.symbol,typeof p.product==='object'?p.product.emoji:undefined,matched?.emoji,'🛒'));
 return {id,slug:String(text(p.slug,p.product_slug,p.productSlug,slugify(name),id)),name,category:matched?.slug ?? (categories.some(c=>c.slug===cat)?cat:'shobji'),categoryName:String(text(p.categoryName,p.category_name,typeof p.category==='object'?p.category.name:undefined,matched?.name,'সবজি')),emoji,unit,price,change,description:text(p.description,p.details,p.summary)};
}
export async function getProducts(): Promise<Product[]> {
 const base=(process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.api-store.workers.dev/api/bazardor').replace(/\/$/,'');
 for (const url of [`${base}/products`, `${base.replace('api.api-store.workers.dev','api.abcz.workers.dev')}/products`]) {
  try {
   const r=await fetch(url,{next:{revalidate:300}}); if(!r.ok) continue;
   const json=await r.json(); const rows=Array.isArray(json)?json:(json.products ?? json.data?.products ?? json.data ?? json.results ?? json.items ?? []);
   if(!Array.isArray(rows)||!rows.length) continue;
   const mapped=rows.map(normalizeProduct).filter(p=>p.name && p.price>0);
   if(mapped.length) return mapped;
  } catch { /* try the alternate API, then use documented demo data */ }
 }
 return fallbackProducts;
}
