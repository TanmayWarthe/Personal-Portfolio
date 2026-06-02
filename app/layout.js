import "./globals.css";

export const metadata = {
  title: "Tanmay Warthe | Full Stack Developer",
  description:
    "Full Stack Developer & Computer Technology student at YCCE Nagpur. I build scalable web apps with React, Node.js, PostgreSQL and integrate AI-powered features.",
  authors: [{ name: "Tanmay Warthe" }],
  keywords: [
    "Tanmay Warthe",
    "Full Stack Developer",
    "React",
    "Node.js",
    "PostgreSQL",
    "YCCE",
    "Nagpur",
    "Web Developer",
    "Software Engineer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://tanmaywarthe.vercel.app",
    title: "Tanmay Warthe | Full Stack Developer",
    description:
      "Full Stack Developer building scalable, AI-powered web applications. React, Node.js, Spring Boot, PostgreSQL.",
    images: [
      {
        url: "https://tanmaywarthe.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Tanmay Warthe Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://tanmaywarthe.vercel.app",
    title: "Tanmay Warthe | Full Stack Developer",
    description:
      "Full Stack Developer building scalable, AI-powered web applications.",
    images: ["https://tanmaywarthe.vercel.app/og-image.png"],
    creator: "@_tanmay_warthe",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.png" />
        <link rel="canonical" href="https://tanmaywarthe.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tanmay Warthe",
              url: "https://tanmaywarthe.vercel.app",
              email: "tanmaywarthe02@gmail.com",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer & Computer Technology student at YCCE Nagpur",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/TanmayWarthe",
                "https://www.linkedin.com/in/tanmay-warthe/",
                "https://x.com/_tanmay_warthe",
                "https://leetcode.com/u/_tanmaaay/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
