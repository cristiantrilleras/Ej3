import React from "react";
import "./Parrafo.css";
import { Navbar } from "../Navbar/Navbar";

export const Sectiontext = ({ name }) => {
  return (
    <div className="Parrafo">
      <h3>HELLO ITS ME</h3>
      <h2>{(name = "Cristian David Trilleras")}</h2>
      <h2>{(name = "and I'm a FrontEnd |")}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae
        sit ipsum saepe asperiores fuga natus voluptatem mollitia, et officiis
        laborum fugit blanditiis reprehenderit voluptates architecto ad at ab
        odio.
      </p>
      <Navbar>
        <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/174/174876.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/174/174879.png" alt="" />
      </Navbar>
    </div>
  );
};
