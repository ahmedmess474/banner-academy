import React from "react";
import blob from "../image/blobs/blob.svg";
import blob1 from "../image/blobs/blob1.svg";
import blob2 from "../image/blobs/blob2.svg";
import blob3 from "../image/blobs/blob3.svg";
import blob4 from "../image/blobs/blob4.svg";

const blobs = [blob, blob1, blob2, blob3, blob4];
let allBlobs = [];
for (let i = 0; i < 150; i++) allBlobs = allBlobs.concat(blobs);

export default function Blobs() {
  return (
    <div id="blobs">
      {allBlobs.map((blb) => (
        <img
          alt="Responsive"
          height="80px"
          style={{
            position: "absolute",
            top: `${Math.random() * 2500 + 40}px`,
            right: `${Math.random() * 2500 - 70}px`,
          }}
          width="50px"
          src={blb}
        ></img>
      ))}
    </div>
  );
}
