export const renderValues = (number) => {
    if (number % 1 !== 0) {
      return number.toLocaleString();
    }
    return number.toLocaleString() + '.00'
  }