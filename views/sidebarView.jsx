// un-comment when needed:
import { sortDishes } from "/src/utilities.js";
import { dishType } from "/src/utilities.js";
import { menuPrice } from "/src/utilities.js";
import "/src/style.css";

/* Functional JSX component. Name must start with capital letter */

function SidebarView(props) {
  props.dishes = sortDishes(props.dishes);
  return (
    <div class="debug">
      <button disabled={props.number == 1} onClick={minusABC}>
        -
      </button>
      {props.number}
      <button onClick={plusABC}>+</button>
      <table>
        <tbody>
          {props.dishes.map(dishTableRowCB)}
          <tr>
            <td></td>
            <td>Total:</td>
            <td></td>
            <td style="text-align:right;">
              {(menuPrice(props.dishes) * props.number).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  function dishTableRowCB(dish) {
    function XABC() {
      props.deleteDish(dish);
    }
    return (
      <tr key={dish.title}>
        <td>
          <button onClick={XABC}>X</button>
        </td>
        <td>
          <a href="#" onClick={() => hlinkABC(dish)}>
            {dish.title}
          </a>
        </td>
        <td>{dishType(dish)}</td>
        <td style="text-align:right;">
          {" "}
          {(dish.pricePerServing * props.number).toFixed(2)}
        </td>
      </tr>
    );
  }
  function plusABC() {
    props.onNumberChange(props.number + 1);
  }
  function minusABC() {
    props.onNumberChange(props.number - 1);
  }
  function hlinkABC(dish) {
    props.onNumberChange(dish);
  }
}

export default SidebarView;
