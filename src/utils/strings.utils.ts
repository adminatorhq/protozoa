import * as randomstring from "randomstring";
// import { v4 as uuidv4 } from "uuid"; TODO
import pluralize from "pluralize";

export class StringUtils {
  static generateRandomString(length = 12): string {
    return randomstring.generate(length);
  }

  static generateRandomNumbers(length: number): string {
    return randomstring.generate({
      length,
      charset: "numeric",
    });
  }

  static generateRandomGibberish(length = 12): string {
    return randomstring.generate({
      length,
      charset:
        "!#$%&()*:;<>?{|}0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
    });
  }

  static generateUUID(): string {
    // return uuidv4();
    return "3ced15e1-0f2f-403d-89e2-00f7ee7474fc";
  }

  static upperCaseFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  static pluralize(word: string, count: number, inclusive?: boolean): string {
    return pluralize(word, count, inclusive);
  }

  static limitTo(word: string, length: number): string {
    return word.slice(0, length);
  }

  static ellipsis(word: string, length: number): string {
    return word.length > length ? `${word.slice(0, length)}...` : word;
  }

  static sluggify = (word: string, replacement = "-"): string =>
    word.toLowerCase().replace(/[^\w]/gi, replacement);
}
