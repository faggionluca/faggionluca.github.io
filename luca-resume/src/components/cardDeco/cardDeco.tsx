import React, { cloneElement, HTMLAttributes, PropsWithChildren } from "react";
import { useMeasure } from "react-use";
import "./cardDeco.scss";

type CardDecoBaseProps = {
  percent?: number;
  design?: "box" | "abstract";
};

type CardDecoProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & CardDecoBaseProps
>;

function CardDeco({
  children,
  className,
  percent = 100,
  design = "box",
  style,
  ...rest
}: CardDecoProps) {
  const [childRef, { height, width }] = useMeasure();
  const classNameContainer = `carddeco-container ${className || ""}`;

  const childClone = cloneElement(children as React.ReactElement, {
    ref: childRef,
  });

  const decoStyleBox = {
    height: (height / 100) * percent,
    width: width,
  };

  const containerStyle = { height: height, ...style };

  return (
    <div className={classNameContainer} style={containerStyle} {...rest}>
      {childClone}
      {design === "box" && (
        <div className="carddeco carddeco-box" style={decoStyleBox}></div>
      )}
      {design === "abstract" && (
        <>
          <div className="carddeco carddeco-abstract-1"></div>
          <div className="carddeco carddeco-abstract-2"></div>
        </>
      )}
    </div>
  );
}

export default CardDeco;
