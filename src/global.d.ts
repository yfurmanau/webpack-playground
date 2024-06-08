declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// allows TS to import files with these extensions
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare const __PLATFORM__: "mobile" | "desktop";
declare const __ENV__: "production" | "development";
