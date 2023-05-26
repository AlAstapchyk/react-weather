import { useRef, useEffect } from "react";

const Header = () => {
  const refHeader = useRef();

  useEffect(() => {
    refHeader.current.className += " to-top";
  }, []);

  return (
    <header className="from-bottom" ref={refHeader}>
      <p className="text--large" align="center">
        Follow the weather of different places around the WORLD!
      </p>
    </header>
  );
};
export default Header;
