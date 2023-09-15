import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section style={{ marginBottom: "15px" }}>
      <h1>Anime's random pict 😋</h1>
      <div className="nav-a">
        <span>Categories:</span>
        <br />
        <Link to={"/waifu"}>Waifu</Link> / <Link to={"/happy"}>Happy</Link> /{" "}
        <Link to={"/cringe"}>Cringe</Link> / <Link to={"/smile"}>Smile</Link> /{" "}
        <Link to={"/cry"}>Cry</Link> / <Link to={"/neko"}>Neko</Link>
      </div>
      <br />
      <div className="nav-a">
        <span>Special character:</span>
        <br />
        <Link to={"/megumin"}>Megumin</Link> /{" "}
        <Link to={"/raiden-shogun"}>Raiden shogun</Link> /{" "}
        <Link to={"/marin"}>Marin kitagawa</Link>
      </div>
    </section>
  );
};

export default Nav;
