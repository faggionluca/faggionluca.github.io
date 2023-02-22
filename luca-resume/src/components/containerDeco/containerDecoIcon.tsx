import React, { ImgHTMLAttributes, RefObject } from "react";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { useMeasure } from "react-use";
import "./containerDecoIcon.scss";

type ContainerDecoIconBaseProps = {
  icon: ImgHTMLAttributes<HTMLImageElement>["src"];
};

type ContainerDecoIconProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> &
  ContainerDecoIconBaseProps;

export const ContainerDecoIcon = forwardRef<
  HTMLDivElement,
  ContainerDecoIconProps
>((props, ref) => {
  const { icon } = props;
  const [imgRef, { width }] = useMeasure();

  const imgContainerStyle = {
    width: width,
  };

  return (
    <div ref={ref} style={imgContainerStyle} className="container-deco-icon">
      <img
        ref={imgRef as any}
        className="container-deco-icon-image"
        src={icon}
      />
    </div>
  );
});

ContainerDecoIcon.displayName = "Icon";
