import { Suspense } from 'react';
import AuthForm from '@/components/AuthForm';
export default function SignUpPage(){return <Suspense fallback={<div className="loading">লোড হচ্ছে…</div>}><AuthForm mode="signup"/></Suspense>}
