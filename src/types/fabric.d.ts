// Si le module n'est pas reconnu, créer un fichier src/types/fabric.d.ts
declare module "fabric" {
  import { Canvas, Textbox, Rect, Image } from "fabric/fabric-impl";
  export { Canvas, Textbox, Rect, Image };
  export const fabric: any;
}