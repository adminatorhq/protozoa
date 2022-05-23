import * as randomstring from 'randomstring';
import { v4 as uuidv4 } from 'uuid';

export class StringHelpers {
  static generateRandomString(length = 12): string {
    return randomstring.generate(length);
  }

  static generateUUID(): string {
    return uuidv4();
  }

  static upperCaseFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // TODO Can improved to split at camelCase
  }

  static limitTo(word: string, length: number): string {
    return word.slice(0, length);
  }

  static sluggify = (word: string, replacement = '-'): string =>
    word.toLowerCase().replace(/[^\w]/gi, replacement);

  static generateRandomNumbers(length: number): string {
    return randomstring.generate({
      length,
      charset: 'numeric',
    });
  }
}
