import Head from 'next/head';

const Page = ({ name, path, children }) => {
  const title = name ? `${name} - Final-File` : 'Final-File - Your Dataroom Simplified.';
  const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}${path}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
      </Head>
      {children}
    </>
  );
};

export default Page;