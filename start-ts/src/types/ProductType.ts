import KindsType from "./KindsType";

interface ProductType {
  id: string;
  name: string;
  enable: boolean;
  description?: string;
  kind: KindsType;
}

export default ProductType;
