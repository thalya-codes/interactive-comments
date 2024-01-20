import moment from 'moment';
import { useEffect, useState } from 'react';

export function useTimeElapsed({ createdDate }: { createdDate: string }): string {
  const [timeElapsed, setTimeElapsed] = useState<string>('');

  useEffect(() => {
    const createdDateInMilli: number = new Date(createdDate).getTime();
    
    setTimeElapsed(moment(createdDateInMilli).fromNow());
  }, [createdDate]);

  return timeElapsed;
}
