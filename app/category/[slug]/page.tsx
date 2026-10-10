import { notFound } from 'next/navigation';
import { getProducts,categories } from '@/lib/products';
import ProductsView from '@/components/ProductsView';
export const revalidate=300;
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const category=categories.find(c=>c.slug===slug);if(!category)notFound();const products=(await getProducts()).filter(p=>p.category===slug);if(!products.length)return <div className="wrap empty-state"><h1>এখানে কোনো পণ্য পাওয়া যায়নি</h1><p>অন্য বিভাগ থেকে পণ্য খুঁজে দেখুন।</p><a className="button" href="/">হোম পেজে ফিরে যান</a></div>;return <div className="wrap listing-page"><div className="page-heading"><span className="large-emoji">{category.emoji}</span><div><h1>{category.name}</h1><p>{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p></div></div><ProductsView products={products}/></div>}
