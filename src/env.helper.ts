import { Logger } from '@nestjs/common';
import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? 'development.env' : `.env`;
  let filePath: string = resolve(`${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  Logger.log(filename);

  return filePath;
}
