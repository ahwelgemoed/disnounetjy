import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence } from "framer-motion";

import styles from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;0,900;1,900&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dis Nou Net Jy",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <link rel="shortcut icon" href="./fav.png" />
        <meta property="og:title" content="Dis Nou Net Jy | Dis Net Jy | DNJ" />
        <meta property="og:description" content="POST THY SELF" />
        <meta property="og:url" content="https://disnounetjy.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://disnounetjy.vercel.app/ogImg.png"
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://disnounetjy.vercel.app//ogImg.png"
        />
        <meta property="twitter:site" content="@ahwelgemoed" />
        <Links />
      </head>
      <body>
        <AnimatePresence exitBeforeEnter>
          <Outlet />
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
