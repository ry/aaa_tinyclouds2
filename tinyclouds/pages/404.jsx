import { h } from "https://x.lcas.dev/preact@10.5.3/mod.js";
import Layout from "../components/layout.jsx";

export default function NotFound(request) {
  return <Layout title="Not Found">
    <body className="index">
      <main>
        <h1 style="text-align: center">404</h1>
      </main>
    </body>
  </Layout>;
}
