import Button from "../../ui/Button.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice.js";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      totalPrice: unitPrice * 1,
      unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-slate-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to order
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
