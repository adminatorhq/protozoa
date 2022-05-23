import dateformat from 'dateformat';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

export class TimeFilters {
  static formatTime(time: string, type?: string): string {
    if (!time) {
      return 'N/A';
    }
    if (type === 'L') {
      return dateformat(time, 'dS mmm yyyy, h:MM TT');
    }
    if (type === 'G') {
      return dateformat(time, 'dS mmm yyyy');
    }
    return dateformat(time, 'mmmm dS, yyyy');
  }

  static timeAgo(time: Date): string {
    if (!time) {
      return '';
    }
    return distanceInWordsToNow(time) + ' ago'; // :eyes
  }
}
