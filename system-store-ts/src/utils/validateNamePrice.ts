function validateNamePrice(name: string, price: number): boolean {
  if (name.length <= 1) {
    console.log("Nome inválido");
    return false;
  }
  if (price <= 0) {
    console.log("Preço inválido");
    return false;
  }
  return true;
}

export default validateNamePrice;