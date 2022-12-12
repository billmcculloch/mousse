declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png" {
  const content: string;
  export = content;
}
declare module "*.svg" {
  const content: string;
  export = content;
}
