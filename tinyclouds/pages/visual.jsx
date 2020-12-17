import { h } from "https://x.lcas.dev/preact@10.5.3/mod.js";
import Layout from "../components/layout.jsx";

export default function Visual(request) {
  return <Layout
    title="Visual Artwork"
    style={`
  body {
    background-color: #eee;
  }
  
  img {
    max-width: 90%;
    max-height: 700px;
  }  
  `}
  >
    <body className="blog">
      <main>
        <p className="date">2005</p>

        <h1>Photoshop Experiments</h1>

        <center>
          <img src="/visual/62351876_2fd847ca2c_o.jpg" />
          <img src="/visual/58854215_32e33b50f3_o.jpg" />
          <img src="/visual/59511576_57c0aa1f12_o.jpg" />
          <img src="/visual/59585839_a5dc1c1fb6_o.jpg" />
          <img src="/visual/66208349_33cb2bd977_o.jpg" />
          <img src="/visual/66547849_3eecaf4833_o.jpg" />
          <img src="/visual/67160245_2c52d04641_o.jpg" />
          <img src="/visual/67600498_685074a156_o.jpg" />
          <img src="/visual/69897003_57bb6ca111_o.jpg" />
          <img src="/visual/71035042_f2c53e57c7_o.jpg" />
          <img src="/visual/71381833_f7d2455420_o.jpg" />
          <img src="/visual/71409249_ee47def621_o.jpg" />
          <img src="/visual/74633858_2759287718_o.gif" />
          <img src="/visual/77077478_a4c945bd25_o.jpg" />
          <img src="/visual/77266861_13780b6084_o.jpg" />
          <img src="/visual/77284008_8d49f67e19_o.jpg" />
          <img src="/visual/77874047_311db7003a_o.jpg" />
          <img src="/visual/77937777_92c59957f2_o.jpg" />
          <img src="/visual/78142878_a2636587bd_o.jpg" />
          <img src="/visual/78837723_eff5795d88_o.jpg" />
          <img src="/visual/79262591_811959e0ee_o.jpg" />
          <img src="/visual/79270951_65c9f347e5_o.jpg" />
          <img src="/visual/83229658_dcf9893c48_o.jpg" />
          <img src="/visual/85928918_d96ce55dc5_o.jpg" />
          <img src="/visual/87287765_172fbc5ff1_o.jpg" />
          <img src="/visual/103236546_6e64071e75_o.jpg" />
          <img src="/visual/57325119_80aff4a055_o.jpg" />
        </center>
        <p></p>
        <br />
        <br />

        <p></p>
      </main>
    </body>
  </Layout>;
}
