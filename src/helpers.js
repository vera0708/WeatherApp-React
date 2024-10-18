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

export const drawDirectionWind = (text) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const degree = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
    let i = 0;

    while (directions[i] !== text) { i++ }
    return degree[i];
}

// 0° — north wind (N)
// 22.5° — north-northeast wind(NNE)
// 45° — northeast wind(NE)
// 67.5° — east-northeast wind(ENE)
// 90°— east wind(E)
// 112.5° — east-southeast wind(ESE)
// 135° — southeast wind(SE)
// 157.5° — south-southeast wind(SSE)
// 180° — south wind(S)
// 202.5° — south-southwest wind(SSW)
// 225° — southwest wind(SW)
// 247.5° — west-southwest wind(WSW)
// 270° — west wind(W)
// 292.5° — west-northwest wind(WNW)
// 315° — northwest wind(NW)
// 337.5° — north-northwest wind(NNW)
// 360° — north wind(N)