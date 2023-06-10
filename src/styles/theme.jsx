export const theme = Object.freeze({
  colors: {
    black: '#000000',
    darkGrey: '#2F4550',
    grey: '#586F7C',
    lightBlue: '#B8DBD9',
    ghostWhite: '#F4F4F9',
    white: '#fff',
    active: '#5f9fcc',
  },
  fontSizes: {
    small: '16px',
    medium: '24px',
    large: '32px',
  },
  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    duration: '0.3s',
    cubicBezier: 'cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
