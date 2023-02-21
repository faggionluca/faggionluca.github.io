import React, { isValidElement, ReactPortal } from 'react';
import { ReactNode, ReactElement } from 'react';

function useSubComponents<T>(children: ReactNode, childElements: T) {
  // const subComponentList = Object.keys(elem);
  if (Array.isArray(childElements)) {
    const subComponents = Object.fromEntries(
      childElements.map((key) => {
        const keySubComps = React.Children.map(children, (child) => {
          if (isValidElement(child) && typeof child.type !== 'string')
            return (child as any)?.type.displayName === key ? child : null;
        });
        return [key, keySubComps];
      }),
    );
    return subComponents;
  }
}

export default useSubComponents;
