import { h } from "https://x.lcas.dev/preact@10.5.3/mod.js";
import Layout from "../components/layout.jsx";

export default function MathPage(request) {
  return <Layout
    title="Math attic"
    style={`
  main {
    max-width: 800px;
  }

  img {
    width: 800px;
  }
  `}
  >
    <body className="blog">
      <main>
        <h1>Math Attic</h1>

        <p>
          <a href="/static/math/favorite-proofs.pdf">
            favorite-proofs.pdf
          </a> is an incomplete 'zine of my favorite proofs.
        </p>

        <p>
          Here are a couple of old homework assignments that might be fun to
          look at
        </p>
        <p>
          <a href="/static/math/20040125.pdf">20040125.pdf</a>
        </p>
        <p>
          <a href="/static/math/20041029.pdf">20041029.pdf</a>
          {" "}
          I like the look of the inequality on the bottom of page 6.
        </p>

        <p>
          Inspired by <a
            href="http://www.amazon.com/Counterexamples-Topology-Dover-Books-Mathematics/dp/048668735X"
          >
            Counterexamples in Topology
          </a>
          {" "}
          and a looming exam, I made this graph. Solid arrows are implications.
          Dotted lines joining a blank node are read as "and". For example, in
          the lower left you can read that a space that is {" "}
          <a href="https://en.wikipedia.org/wiki/Separable_space">
            Separable
          </a> and <a
            href="https://en.wikipedia.org/wiki/Metrizable_space"
          >
            Metrizable
          </a> is {" "}
          <a href="https://en.wikipedia.org/wiki/Second-countable_space">
            Second Countable
          </a>.
        </p>

        <a href="/static/math/topology.png">
          <img src="/static/math/topology.png" />
        </a>
      </main>
    </body>
  </Layout>;
}
