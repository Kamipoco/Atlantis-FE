import { Parallax } from "react-scroll-parallax";
import cs from "classnames";

interface Props {
  className?: string;
  maskSrc: string;
  backgroundSrc: string;
}

export function Background({ className, maskSrc, backgroundSrc }: Props) {
  return (
    <div className={cs("absolute overflow-hidden z-0 w-full", className)}>
      <img src={maskSrc} alt="team mask" className="relative z-20 w-full" />
      <Parallax
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full"
        y={[-20, 20]}
        tagOuter="figure"
      >
        <img src={backgroundSrc} alt="team bg" className=" w-full" />
      </Parallax>
    </div>
  );
}
