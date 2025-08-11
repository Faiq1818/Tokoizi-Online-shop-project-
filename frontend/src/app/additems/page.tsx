'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import Nav from "../../components/nav";
import Mainbody from "./mainbody";

export default function AddItems() {
  const { loading, loggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !loggedIn) {
      router.replace('/login');
    }
  }, [loading, loggedIn, router]);

  if (loading || !loggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <Mainbody />
    </>
  );
}
