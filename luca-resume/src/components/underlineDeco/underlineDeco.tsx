import React, {
  HTMLAttributes,
  PropsWithChildren,
  cloneElement,
  ReactElement,
} from "react";
import { useMeasure } from "react-use";
import "./underlineDeco.scss";

type UnderlineProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function UnderlineDeco(props: UnderlineProps) {
  const { children, style, className, ...rest } = props;
  const [childRef, { width }] = useMeasure();

  const decoStyle = {
    width: width + 10,
    ...style,
  };

  const childrenWithRef = cloneElement(children as ReactElement, {
    ref: childRef,
  });

  return (
    <div
      className={`deco-container d-flex align-items-start ${className || ""}`}
      {...rest}
    >
      {childrenWithRef}
      <div className="deco" style={decoStyle}></div>
    </div>
  );
}

export default UnderlineDeco;
