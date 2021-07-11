import React from "react";
import iconScroll from "../assets/image/icon-go-top.svg";
const IconScrollUp = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);
  const handleScrollPosition = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleScroll = () => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };
  return (
    <>
      <div
        className={
          scrollPosition > 450 ? "button-scroll-up active" : "button-scroll-up "
        }
        onClick={handleScroll}
      >
        <img src={iconScroll} />
      </div>
    </>
  );
};

export default IconScrollUp;
