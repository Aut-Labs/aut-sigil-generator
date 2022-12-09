import { Canvas } from "canvas";

export interface SigilOutput {
  previewElement: Canvas;
  toBase64: (mimeType?: string) => string;
}
