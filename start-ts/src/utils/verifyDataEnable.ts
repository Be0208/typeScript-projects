function verifyDataEnable(data: any[]){
  const filtered = data.filter((item) => {
    if(item.enabled == true) {
      return item
    } 
  })
  return filtered;
};

export default verifyDataEnable;