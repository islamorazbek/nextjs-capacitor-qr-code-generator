import dynamic from 'next/dynamic';
import React from 'react'

const MyApp = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});

export default function Index() {
  return <MyApp />;
}
