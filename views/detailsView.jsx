import "/src/style.css";

function DetailsView(props) {
  return (
    <div class="debug">
      {props.dishData.title}
      <tr></tr>
      <span>
        <img src={props.dishData.image} height="100"/>
        <table>
          <tr>Price: {props.dishData.pricePerServing}</tr>
          <tr>
            for {props.guests} guests:{" "}
            {(props.dishData.pricePerServing * props.guests).toFixed(2)}
          </tr>
          <tr></tr>
          <tr></tr>
        </table>
        <button disabled={props.isDishInMenu} onClick={menuButtonClickedACB}>Add to menu!</button>
        <button>Cancel</button>
      </span>
      <span>
        <table>
        {props.dishData.extendedIngredients.map(ingredientTableRowCB)}
        <tr></tr>
        </table>
      </span>
      <span>
        <table>
          {props.dishData.instructions}
          <tr></tr>
          <tr></tr>
          <a href={props.dishData.sourceUrl}>More information</a>
        </table>
      </span>
    </div>
  );
  function ingredientTableRowCB(ingr){
    return (
      <tr>{ingr.name}: {ingr.amount} {ingr.unit}</tr>
    )
  }

  function menuButtonClickedACB() {
    props.AddMenuClickedCustomEvent()
  }
}

export default DetailsView;
