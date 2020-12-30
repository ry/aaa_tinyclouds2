import { proxy, redirect, serve, serveStaticAssets } from "../sift/mod.js";
import NotFound from "./pages/404.jsx";
import Home from "./pages/home.jsx";
import OptimisticNihilism from "./pages/optimistic_nihilism.jsx";
import Residency from "./pages/residency.jsx";
import Colorize from "./pages/colorize.jsx";
import Rant from "./pages/rant.jsx";
import IocpLinks from "./pages/iocp_links.jsx";
import Visual from "./pages/visual.jsx";
import MathPage from "./pages/math.jsx";





serve({
  "/": Home,
  "/optimistic_nihilism": OptimisticNihilism,
  "/residency": Residency,
  "/colorize": Colorize,
  "/rant": Rant,
  "/iocp_links": IocpLinks,
  "/math": MathPage,
  "/visual": Visual,
  "/static/(.*)": serveStaticAssets(import.meta.url),
  404: NotFound,
  // Redirects
  "/rant.html": redirect("/rant"),
  "/(iocp-links|iocp-links.html)": redirect("/iocp_links"),
  "/math/index.html": redirect("/math"),
  // Proxies
  "/visual/:splat.jpg": proxy("tinyclouds.org"),
  "/colorize/val-imgs/(.*)": proxy("tinyclouds.org"),
});
