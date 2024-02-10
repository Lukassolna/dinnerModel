import SidebarView from "../views/sidebarView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
  // needed for the presenter to update (its view) when relevant parts of the model change
  function Sidebar(props) {
    function someACB(arg) {
      if (Number.isInteger(arg)) {
        props.model.setNumberOfGuests(arg);
      }
      if (typeof arg === 'object'){
        props.model.setCurrentDish(arg.id)
      }
    }
    function otherACB(arg) {
      props.model.removeFromMenu(arg)
    }
    return (
      <SidebarView
        number={props.model.numberOfGuests}
        dishes={props.model.dishes}
        onNumberChange={someACB}
        deleteDish={otherACB}
      />
    );
  }
);
