import Sidebar from "./sidebarPresenter.jsx";
import Summary from "./summaryPresenter.jsx";
import Details from "./detailsPresenter.jsx";
import Search from "./searchPresenter.jsx";

export default function VueRoot(props) {
  return (
    <div>
      <div>
        <Sidebar model={props.model} />
      </div>
      <div>
        <Search model={props.model}/>
        <Details model={props.model}/>
        <Summary model={props.model}/>
      </div>
    </div>
  );
}
