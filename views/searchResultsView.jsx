// un-comment when needed:
import "/src/style.css";

function searchResultsView(props) {
  const imgStyle = {
    display: "inline-block,",
    textAlign: "center",
    width: "100px",
    verticalAlign: "top",
  };
  return <div style={imgStyle}>{props.searchResults.map(imageRenderCB)}</div>;

  function imageRenderCB(arg) {
    function imgClickACB() {
      props.imgClickedCustomEvent(arg);
    }
    return (
      <span onClick={imgClickACB}>
        <img src={arg["image"]} height="100"/>
        <div>{arg["title"]}</div>
      </span>
    );
  }
}

export default searchResultsView;
