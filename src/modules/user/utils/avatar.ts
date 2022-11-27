import { createHash } from "crypto";


/**
 * Obtém a URL de um Gravatar a partir de um endereço de email
 *
 * @param email O endereço de email
 */
export function getGravatarUrl(email: string): string {
  const hash = createHash('md5').update(email.trim().toLowerCase()).digest('hex');

  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}
