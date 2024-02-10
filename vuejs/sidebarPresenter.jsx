import SidebarView from "../views/sidebarView.jsx";

export default function Sidebar(props) {
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
