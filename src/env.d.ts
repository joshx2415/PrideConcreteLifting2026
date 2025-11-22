declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    ['x-data']?: any;
    ['x-show']?: any;
    [key: `x-${string}`]: any;
    [key: `@${string}`]: any;
    [key: `:${string}`]: any;
  }
}