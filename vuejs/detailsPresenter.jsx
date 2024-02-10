import DetailsView from "../views/detailsView.jsx";
import resolvePromise from "../resolvePromise.js";

export default function Details(props) {
  function addMenuACB() {
    props.model.addToMenu(props.model.currentDishPromiseState.data);
  }

  function isInMenuChecker() {
    if (props.model.dishes.length > 0) {
      return props.model.dishes.some((element) => {
        if (element.id == props.model.currentDish) {
          return true;
        }
      });
    }
    return false;
  }

  let isInMenu = false;

  if (props.model.currentDishPromiseState.promise !== undefined) {
    if (
      props.model.currentDishPromiseState.data !== null &&
      props.model.currentDishPromiseState.data !== undefined
    ) {
      isInMenu = isInMenuChecker();
      return (
        <DetailsView
          dishData={props.model.currentDishPromiseState.data}
          guests={props.model.numberOfGuests}
          isDishInMenu={isInMenu}
          AddMenuClickedCustomEvent={addMenuACB}
        />
      );
    }
    if (
      props.model.currentDishPromiseState.error !== null &&
      props.model.currentDishPromiseState.error !== undefined
    ) {
      return <div>{props.model.currentDishPromiseState.error}</div>;
    }

    return (
      <div>
        <img src="./loading.gif" alt="loading gif" />
      </div>
    );
  }
  return <div>no data</div>;
}
