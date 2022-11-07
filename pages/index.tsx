import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { StoreContext } from '../store';

export default function Home() {
  const { test: [test] } = React.useContext(StoreContext);

  return (
    <div>
      <h1>
        hello
        {test}
      </h1>
    </div>
  );
}
