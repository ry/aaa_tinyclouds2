import { h } from "https://x.lcas.dev/preact@10.5.3/mod.js";
import Layout from "../components/layout.jsx";

export default function homePage(request) {
  return (
    <Layout title="tinyclouds">
      <body className="index">
        <main>
          <p><img src="static/ry.jpg" height="100" /></p>
          <h1>Ryan</h1>
          <p><a href="mailto:ry@tinyclouds.org">ry@tinyclouds.org</a></p>
          <br />
          <p><a href="https://deno.land/">Deno</a></p>

          <p><a href="optimistic_nihilism/">Optimistic Nihilism</a></p>

          <p><a href="residency">Google Brain Residency</a></p>

          <p><a href="colorize">Automatic Colorization</a></p>

          <p>
            <a href="http://github.com/ry/v8worker">
              v8worker
            </a>: Minimal golang binding to V8
          </p>

          <p><a href="rant.html">I hate almost all software</a></p>

          <p>
            <a href="iocp-links.html">
              Async I/O in Windows for Unix Programmers
            </a>
          </p>

          <p>
            <a href="https://github.com/libuv/libuv">libuv</a> (<a
              href="https://vimeo.com/24713213"
            >
              demo
            </a>)
          </p>

          <p>
            <a href="http://nodejs.org">Node.js</a> (<a
              href="https://www.youtube.com/watch?v=jo_B4LTHi3I"
            >
              talk
            </a>, <a href="static/jsconf.pdf">slide deck</a>)
          </p>

          <p><a href="https://github.com/joyent/http-parser">http-parser</a></p>

          <p><a href="math/index.html">random math stuff</a></p>

          <p><a href="visual">random photoshop experiments</a></p>
        </main>
      </body>
    </Layout>
  );
}
