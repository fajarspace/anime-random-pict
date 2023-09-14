import React from "react";

const Nav = () => {
  return (
    <section style={{ marginBottom: "15px" }}>
      <h1>Anime's random pict 😋</h1>
      <div className="nav-a">
        <span>Categories:</span>
        <br />
        <a href="/waifu">Waifu</a> / <a href="/happy">Happy</a> /{" "}
        <a href="/cringe">Cringe</a> / <a href="/smile">Smile</a> /{" "}
        <a href="/cry">Cry</a> / <a href="/neko">Neko</a>
      </div>
    </section>
  );
};

export default Nav;
