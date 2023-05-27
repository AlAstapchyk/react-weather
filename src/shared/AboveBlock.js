import { useEffect, useRef } from "react";

const AboveBlock = ({ children }) => {
  const refMainDiv = useRef();

  useEffect(() => {
    refMainDiv.current.className += " to-top";
  }, []);

  return (
    <p className="above-block from-bottom" ref={refMainDiv}>
      {children}
    </p>
  );
};
export default AboveBlock;
