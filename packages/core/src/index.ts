export type ApiNodeConfig = {
  id: string;
  method: string;
  url: string;
};

export function validateNode(config: ApiNodeConfig): boolean {
  return config.url.length > 0;
}
