import { AiOutlinePlus } from "react-icons/ai";
import getSymbolFromCurrency from 'currency-symbol-map'

export default function Product({ product }) {
  return (
    <div className="bg-white flex flex-col relative items-center text-center p-3">
      <button>
        <AiOutlinePlus
          className="absolute top-3 right-3 rounded-lg w-6 h-6 flex items-center justify-center 
                                text-brand-color hover:bg-brand-color hover:text-white transition-colors
                                 p-1"
        ></AiOutlinePlus>
      </button>

      <img className="w-2/3" src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-brand-color">
        {product.title}
      </div>
      <div className="text-sm font-semibold text-gray-800">{getSymbolFromCurrency('TRY')} {product.price}</div>
      <div className="text-sm font-semibold text-gray-500">{product.alt}</div>
    </div>
  );
}
