import '../styles/Home.module.css'
// import { useRouter } from 'next/router';

import NavComponent from '../components/layouts/NavComponent'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home({ children }) {
  const router = useRouter();

  useEffect(() => {
    // (async () => {
    //   const userId = null;

    //   if (userId === undefined || userId === 'undefined' || userId === null) {
    //     await router.push('/templates');
    //   } else {
    //     await router.push('/templates');
    //   }
    // })();
  });

  return (
    <>
      <NavComponent>
        {children}
      </NavComponent>
    </>
  );
}
