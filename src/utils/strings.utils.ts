import * as randomstring from "randomstring";

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

  static upperCaseFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  static pluralize({
    count,
    singular,
    plural,
    inclusive,
  }: {
    count: number;
    singular: string;
    plural?: string;
    inclusive?: boolean;
  }): string {
    const computed = count === 1 ? singular : plural || `${singular}s`;

    return inclusive ? `${count} ${computed}` : computed;
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
