/**
 * @author Junaid Atari
 * @link https://gist.github.com/blacksmoke26/65f35ee824674e00d858047e852bd270
 *
 * Modified by AgainPsychoX to use TypeScript and `use-debounce` package.
 */

import { useState, useEffect } from 'react';
import { useDebouncedCallback } from "use-debounce";

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const resolveBreakpoint = (width: number): Breakpoint => {
	if (width < 576)  return 'xs';
	if (width < 768)  return 'sm';
	if (width < 992)  return 'md';
	if (width < 1200) return 'lg';
	if (width < 1440) return 'xl';
	return 'xxl';
};

const useBreakpoint = (breakpoints?: Breakpoint[]) => {
	const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));
	const update = useDebouncedCallback(() => {
		setSize(resolveBreakpoint(window.innerWidth));
	}, 200);

	useEffect(() => {
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, [update]);

  if (breakpoints) {
    return breakpoints.includes(size)
  }
	return size;
};

export default useBreakpoint;