import { useEffect, useRef } from "react";

const AboveBlock = ({ children }) => {
  const refMainDiv = useRef();

  useEffect(() => {
    refMainDiv.current.className += " to-bottom";
  }, []);

  return (
    <p className="above-block from-top" ref={refMainDiv}>
      {children}
    </p>
  );
};
export default AboveBlock;
