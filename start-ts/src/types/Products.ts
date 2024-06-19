interface ProductType {
  id:string;
  name:string;
  enabled:boolean;
  description?:string;
  kind: 'OUTROS' | "DIVERSOS" | "TECH"; //tipo de produto 
}

export default ProductType;
