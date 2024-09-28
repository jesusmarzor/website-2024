import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import CustomLink from "@/app/components/CustomLink";
import { CustomLinkType } from "@/app/utils/enums";

interface MousePosition {
  x?: number;
  y?: number;
}

function getRelativeCoordinates(
  event: MouseEvent,
  referenceElement: HTMLDivElement
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

interface props {
    type: CustomLinkType
    href: string
    icon?: string
    title: string
    subtitle: string
    rightText?: string
}

const Card: React.FC<props> = ({type, href, icon = null, title, subtitle, rightText = null}) => {
    const [showGradient, setShowGradient] = useState(false);
    const [mousePosition, setMousePosition] = useState<MousePosition>({});
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        setMousePosition(
          getRelativeCoordinates(e.nativeEvent, containerRef.current)
        );
      }
    };
  
    const handleHoverStart = () => {
      setShowGradient(true);
    };
  
    const handleHoverEnd = () => {
      setShowGradient(false);
    };
  
    return (
      <motion.div
        ref={containerRef}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onMouseMove={handleMouseMove}
        className="w-full"
      >
        <div
          className={`w-full relative p-[1px] rounded-2xl cursor-pointer bg-gradient-to-br from-[rgba(255,254,241,0.15)] to-[rgba(255,254,241,0.08)]`}
          style={
            {
              "--cursor-y": `${mousePosition.y}px`,
              "--cursor-x": `${mousePosition.x}px`,
              "--glow-opacity": showGradient ? 1 : 0,
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 z-1 rounded-2xl transition-opacity duration-300 ease-out"
            style={{
              backgroundImage: `radial-gradient(400px at var(--cursor-x) var(--cursor-y), rgba(255,254,241,0.35), transparent 40%)`,
              opacity: showGradient ? 1 : 0,
            }}
          />
          <CustomLink
            type={type}
            href={href}
          >
            <Image
              className="object-cover rounded-xl"
              src={icon ?? ""}
              alt={title}
              width={48}
              height={48}
            />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">{title}</h3>
              <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                <p className="">{subtitle}</p>
                { 
                  rightText 
                  && <p className="self-end">{rightText}</p>
                }
              </div>
            </section>
          </CustomLink>
        </div>
      </motion.div>
    );
  }
  
  export default Card