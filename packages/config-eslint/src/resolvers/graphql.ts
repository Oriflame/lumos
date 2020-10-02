import { GQL_EXT_PATTERN } from '@ori-open/lumos-common';

export const interfaceVersion = 2;

export function resolve(source: string): { found: boolean; path?: unknown } {
  if (GQL_EXT_PATTERN.exec(source)) {
    return { found: true, path: null };
  }

  return { found: false };
}
