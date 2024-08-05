import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center bg-[#222] p-5 text-white">
      <div className="mb-3 inline-block max-w-[600px] rounded-xl bg-[#333] p-3 text-center text-[0.8em]">
        <p>
          Kamala Harris Token is a cryptocurrency created for entertainment
          purposes and is not affiliated with or endorsed by Kamala Harris.
          While HARRIS Token may reference or incorporate elements related
          Kamala Harris´ persona, image, or likeness, it does not imply any
          direct endorsement, partnership, or approval by Kamala Harris. Any
          resemblance or association between HARRIS Token and Kamala Harris is
          purely coincidental and intended for satirical or humorous purposes.
        </p>
      </div>
      <p>
        Contact:{" "}
        <a
          className="text-white no-underline"
          href="mailto:contact@kamalaharristoken.xyz"
        >
          contact@kamalaharristoken.xyz
        </a>
      </p>
    </footer>
  );
};

export default Footer;
