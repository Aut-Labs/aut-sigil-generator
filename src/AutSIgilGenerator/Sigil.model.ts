import { Canvas } from "canvas";

export interface SigilOutput {
  previewElement: Canvas;
  download: (filename?: string) => void;
  toBase64: (mimeType?: string) => string;
  toFile: (filename?: string, mimeType?: string) => Promise<any>;
}
