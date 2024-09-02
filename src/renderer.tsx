import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <html lang="en"/>
      <head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#293f50" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ammaha</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/static/icons/icon.svg" />
        <link rel="manifest" href="/static/site.webmanifest" />

        <link rel="stylesheet" href="/static/stylesheets/main.css" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:100,300,400" />
      </head>
      <body>{children}</body>
    </html>
  )
})
