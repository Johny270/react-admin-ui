import Single from "../../components/Single.tsx/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  )
}

export default Product