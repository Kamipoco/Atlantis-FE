import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
export function Welcome() {
  const [castleTop, setCastleTop] = useState("300px");
  const [logoTop, setLogoTop] = useState("700px");
  const [text1Top, setText1Top] = useState("45%");
  const [text2Top, setText2Top] = useState("55%");
  const [text1Display, setText1Display] = useState("block");
  const [text2Display, setText2Display] = useState("block");
  const [blueRockBot, setBlueRockBot] = useState("0px");
  const [darkRockBot, setDarkRockBot] = useState("0px");
  const [text1Opacity, setText1Opacity] = useState(1);
  const [text2LetterSpacing, setText2LetterSpacing] = useState("5px");
  const [text2Opacity, setText2Opacity] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const value = window.scrollY;
      setCastleTop(300 - value * 0.3 + "px");
      setLogoTop(700 - value * 0.8 + "px");
      setBlueRockBot(0 + value * 0.08 + "px");
      setDarkRockBot(0 + value * 0.05 + "px");

      if (value >= 500 && value <= 800) {
        setText1Opacity(1 - (value - 500) / 200);
      }
      if (value < 500) {
        setText1Top((value / 499) * 10 + 45 + "%");
        setText2Top((value / 499) * 10 + 55 + "%");
        setText1Opacity(1);
        setText2LetterSpacing("5px");
      }
      if (value >= 500 && value <= 900) {
        setText2LetterSpacing(((value - 500) / 400) * 30 + 5 + "px");
      }
      if (value >= 820) {
        setText2Opacity(0);
        setText1Opacity(0);
        setText2Display("none");
        setText1Display("none");
      } else {
        setText2Opacity(1);
        setText2Display("block");
        setText1Display("block");
      }
    });
  }, []);
  return (
    <div className="welcome">
      <section className="section">
        <img
          src="/assets/images/home/sky-bg.png"
          className="skyBg"
          alt="sky-bg"
        />
        <img
          style={{
            top: logoTop,
          }}
          src="/assets/images/home/welcome-logo.png"
          alt="logo"
          className="logo"
        />
        <p
          style={{
            opacity: text1Opacity,
            top: text1Top,
            display: text1Display,
          }}
          className="text-1"
        >
          WELCOME TO
        </p>
        <p
          style={{
            letterSpacing: text2LetterSpacing,
            opacity: text2Opacity,
            top: text2Top,
            display: text2Display,
          }}
          className="text-2"
        >
          THE OLYMPUS
        </p>

        <img
          style={{
            top: castleTop,
          }}
          src="/assets/images/home/castle.png"
          alt="castle"
          className="castle"
        />

        <img
          style={{
            bottom: blueRockBot,
          }}
          src="/assets/images/home/blueRock.png"
          alt="blue-rock"
          className="blue-rock"
        />
        <img
          style={{
            bottom: darkRockBot,
          }}
          src="/assets/images/home/darkRock.png"
          alt="dark-rock"
          className="dark-rock"
        />
        <img
          src="/assets/images/home/black-rock.png"
          alt="black-rock"
          className="black-rock"
        />
      </section>
    </div>
  );
}
