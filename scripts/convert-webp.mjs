import sharp from "sharp";
import { readdirSync, unlinkSync } from "fs";
import { join, extname, basename } from "path";

const dir = "public/Screenshots";
const files = readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, basename(file, extname(file)) + ".webp");
  await sharp(input).webp({ quality: 85 }).toFile(output);
  unlinkSync(input);
  console.log(`✓ ${file} → ${basename(output)}`);
}

console.log("Done!");
