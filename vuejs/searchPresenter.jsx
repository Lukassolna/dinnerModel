import DetailsView from "../views/detailsView.jsx";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import resolvePromise from "../resolvePromise.js";

export default function Search(props) {
  function dishTypeSelectedACB(arg) {
    props.model.setSearchType(arg);
  }

  function searchTextWrittenACB(text) {
    props.model.setSearchQuery(text);
  }

  function searchClickedACB() {
    props.model.doSearch(props.model.searchParams);
  }

  function currentClickedACB(id) {
    props.model.setCurrentDish(id["id"]);
  }

  function conditionalView(param) {
    if (param.promise !== undefined) {
      if (param.data !== null && param.data !== undefined) {
        return (
          <SearchResultsView
            imgClickedCustomEvent={currentClickedACB}
            searchResults={param.data}
          />
        );
      }
      if (param.error !== null && param.error !== undefined) {
        return <div>{param.error}</div>;
      }

      return (
        <div>
          <img src="./loading.gif" alt="loading gif" />
        </div>
      );
    }
    return <div>no data</div>;
  }
  return (
    <div>
      <SearchFormView
        dishTypeOptions={["starter", "main course", "dessert"]}
        text={props.model.searchParams.query}
        type={props.model.searchParams.type}
        searchClickedCustomEvent={searchClickedACB}
        searchTextWrittenCustomEvent={searchTextWrittenACB}
        dishTypeSelectedCustomEvent={dishTypeSelectedACB}
      />
      {conditionalView(props.model.searchResultsPromiseState)}
    </div>
  );
}
