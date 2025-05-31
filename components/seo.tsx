import Head from "next/head";

export function Seo() {
  return (
    <Head>
      <title>Aditya Jadhav | Portfolio</title>
      <meta name="description" content="A portfolio website built with Next.js, showcasing projects and skills by Aditya Jadhav." />
      <meta name="keywords" content="Aditya Jadhav, portfolio, web developer, Next.js, React, projects, skills" />
      <meta name="author" content="Aditya Jadhav" />
      <meta property="og:title" content="Aditya Jadhav | Portfolio" />
      <meta property="og:description" content="A portfolio website built with Next.js, showcasing projects and skills by Aditya Jadhav." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/placeholder-user.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aditya Jadhav | Portfolio" />
      <meta name="twitter:description" content="A portfolio website built with Next.js, showcasing projects and skills by Aditya Jadhav." />
      <meta name="twitter:image" content="/placeholder-user.jpg" />
    </Head>
  );
}
