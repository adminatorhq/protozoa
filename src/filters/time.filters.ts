// import dateformat from 'dateformat';
// import  from 'date-fns/formatDistanceToNow';
// import  from 'date-fns/format';
import { format, formatDistanceToNow } from 'date-fns';
export class TimeFilters {
  static formatTime(time: Date, type?: 'L' | 'G'): string {
    if (!time) {
      return 'N/A';
    }
    if (type === 'L') {
      return format(time, 'do MMM yyyy, h:MM aa');
    }
    if (type === 'G') {
      return format(time, 'do MMM yyyy');
    }
    return format(time, 'MMMM do, yyyy');
  }

  static timeAgo(time: Date): string {
    if (!time) {
      return '';
    }
    return formatDistanceToNow(time) + ' ago'; // :eyes
  }
}
