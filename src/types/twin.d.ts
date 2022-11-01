import styledImport, { css as cssImport, CSSProp } from "styled-components";
import "twin.macro";

declare module "twin.macro" {
  // The styled and css imports
  // eslint-disable-next-line no-unused-vars
  const styled: typeof styledImport;
  // eslint-disable-next-line no-unused-vars
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  // eslint-disable-next-line no-unused-vars
  type HTMLAttributes<T> = {
    css?: CSSProp;
    tw?: string;
    // eslint-disable-next-line no-undef
  } & DOMAttributes<T>;

  // The inline svg css prop
  // eslint-disable-next-line no-unused-vars
  type SVGProps<T> = {
    css?: CSSProp;
    tw?: string;
  } & SVGProps<SVGSVGElement>;
}

// The 'as' prop on styled components
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    type IntrinsicAttributes<T> = {
      as?: string | Element;
      // eslint-disable-next-line no-undef
    } & DOMAttributes<T>;
  }
}
