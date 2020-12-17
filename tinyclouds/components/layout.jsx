import { h } from "https://x.lcas.dev/preact@10.5.3/mod.js";

const gaScript =
  `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-91675022-1', 'auto');
    ga('send', 'pageview');`;

export default function Layout({ children, title, style }) {
  return <html>
    <head>
      <meta charset="UTF-8" />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="http://tinyclouds.org/feed.xml"
      />
      <title>{title}</title>
      <style>{style}</style>
      <script>
        {gaScript}
      </script>
    </head>
    {children}
  </html>;
}
