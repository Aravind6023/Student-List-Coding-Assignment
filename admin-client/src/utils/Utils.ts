export const formatDateForDisplay = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedParts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
  
    const day = formattedParts.find(part => part.type === 'day')?.value || '';
    const month = formattedParts.find(part => part.type === 'month')?.value || '';
    const year = formattedParts.find(part => part.type === 'year')?.value || '';
  
    return `${day}-${month}, ${year}`;
  };
  
  export const formatDateForInput = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };
  