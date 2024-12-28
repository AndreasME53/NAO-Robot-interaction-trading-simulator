export const API_TYPE = (action: string) => ({
  STARTED: `${action}_STARTED`,
  FULLFILLED: `${action}_FULLFILLED`,
  REJECTED: `${action}_REJECTED`
});

const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const copy = obj => {
  return JSON.parse(JSON.stringify(obj));
};
export const getDate = (date: Date | string | null) => {
  if (!date) return '-';
  let d = new Date(date);
  if (typeof date === 'string') d = new Date(date);
  return `${d.getDate()} ${shortMonths[d.getMonth()]} ${d.getUTCFullYear()}`;
};

export const isDate = (date: Date | string) => {
  return !isNaN(new Date(date).valueOf());
};

export const camelCaseToNormal = str => {
  return (
    str
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function(str) {
        return str.toUpperCase();
      })
  );
};

export const showOnKeys = field => {
  const keys: string[] = [];
  Object.keys(field).forEach(key => {
    if (field[key] === 'On') keys.push(camelCaseToNormal(key));
  });
  return keys.join(', ');
};
