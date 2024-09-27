export const reformateDate = (dateStr) => {
    const months = ['', 'January', 'February', 
        'March', 'Aprile', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'];
    
  
    const noZero = (n) => Number(n) < 10 ? n.substr(1, 1) : n;
    const monthN = noZero(dateStr.split('-')[1]);
    // const monthName = monthN.toLocaleString('default', { month: 'long' });
 
    const month = months[monthN];
    return (month)
};