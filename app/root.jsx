// import {Links, Meta, Outlet, Scripts, } from "@remix-run/react"

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "@remix-run/react"


// export default function App() {
//     return (
//         <html>
//             <head>
//                 <link rel="icon" href="data:image/x-icon;base64,AA" />
//                 <Meta />
//                 <Links />
//             </head>
//             <body>
//                 <h1>Axend Platform</h1>
//                 <Outlet />

//                 <Scripts />
//             </body>
//         </html>
//     )
// }
export default function App() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
        <h1>Anxend Platform</h1>
          <Outlet />
          <Scripts />
        </body>
      </html>
    );
  }