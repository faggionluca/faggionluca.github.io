import React, { cloneElement, HTMLAttributes, PropsWithChildren } from "react";
import { useMeasure } from "react-use";
import "./cardDeco.scss";

type CardDecoBaseProps = {
  percent?: number;
};

type CardDecoProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & CardDecoBaseProps
>;

function CardDeco({
  children,
  className,
  percent = 100,
  ...rest
}: CardDecoProps) {
  const [childRef, { height, width }] = useMeasure();
  const classNameContainer = `carddeco-container ${className || ""}`;

  const childClone = cloneElement(children as React.ReactElement, {
    ref: childRef,
  });

  const decoStyle = {
    height: (height / 100) * percent,
    width: width,
  };

  return (
    <div className={classNameContainer} {...rest}>
      {childClone}
      <div className="carddeco-box" style={decoStyle}></div>
    </div>
  );
}

export default CardDeco;
