import React from "react";

export default function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="/">TEXTILE <span>WEB</span></a>
        <div className="nav-links"><a href="#collections">Collections</a><a href="#about">About</a><a className="contact" href="#contact">Contact us ↗</a></div>
      </nav>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TEXTILE WEB · DEMO PREVIEW</p>
          <h1>GitHub Auto-Deploy Test Successful<br/><em>inspire spaces.</em></h1>
          <p className="intro">A small preview homepage to test the GitHub → Vercel workflow. This is a demo scaffold, not the live website.</p>
          <a className="cta" href="#collections">Explore the demo <span>↗</span></a>
          <p className="note">TEST ENVIRONMENT · NO PRODUCTION CHANGES</p>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract woven textile in warm neutral colors">
          <div className="fabric fabric-one"></div><div className="fabric fabric-two"></div><div className="fabric fabric-three"></div>
          <div className="art-label">TEXTURE / FORM / FUNCTION</div>
        </div>
      </section>
      <section id="collections" className="collections">
        <p className="eyebrow">A FIRST LOOK</p><h2>Designed around texture.</h2>
        <div className="tiles"><article><span>01</span><h3>Natural tones</h3><p>Quiet colors, considered details.</p></article><article><span>02</span><h3>Modern weave</h3><p>Patterns with depth and character.</p></article><article><span>03</span><h3>Everyday comfort</h3><p>Material-led ideas for living.</p></article></div>
      </section>
      <footer id="contact"><span>TEXTILE WEB · TEST SCAFFOLD</span><span>Built to validate preview deployments.</span></footer>
    </main>
  );
}
