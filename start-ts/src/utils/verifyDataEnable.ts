function veriFyDataEnable(data: any[]) {
  const filtered = data.filter((item) => {
    if (item.enable) {
      return item;
    }
  });

  return filtered;
}

export default veriFyDataEnable;
