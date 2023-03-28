export default () => {
  function transformMsTOKh(speed: number) {
    const result = speed * 3.6;
    return `${result.toFixed(1).replace('.', ',')} km/h`;
  }

  return {transformMsTOKh};
};
