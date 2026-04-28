import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const roots = ['src', 'public'];
const forbidden = ['OPENAI_API_KEY', 'OIDC_CLIENT_SECRET', 'AUTH_SESSION_SECRET', 'REDIS_PASSWORD'];
const extensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.scss', '.json']);

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* files(fullPath);
    } else if (entry.isFile() && extensions.has(path.extname(entry.name))) {
      yield fullPath;
    }
  }
}

for (const root of roots) {
  try {
    await stat(root);
  } catch {
    continue;
  }

  for await (const file of files(root)) {
    const content = await readFile(file, 'utf8');
    const leakedName = forbidden.find((name) => content.includes(name));
    if (leakedName) {
      throw new Error(`Frontend source must not reference backend secret ${leakedName}: ${file}`);
    }
  }
}

console.log('frontend-env-ok');
