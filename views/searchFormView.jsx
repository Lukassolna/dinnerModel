// un-comment when needed:
import "/src/style.css";

function searchFormView(props) {
  return (
    <div class="debug">
      <input type="text" value={props["text"]} onChange={inputACB} />
      <select
        name="value"
        id="course"
        value={props["type"]}
        onChange={selectACB}
      >
        <option value={props["text"]}>Choose:</option>
        {props.dishTypeOptions.map(keyValueOptionCB)}
      </select>
      <button onClick={searchACB}>Search!</button>
    </div>
  );

  function keyValueOptionCB(arg) {
    return (
      <option value={arg} text={arg}>
        {props.dishTypeOptions.indexOf(arg)}
      </option>
    );
  }

  function searchACB() {
    props.searchClickedCustomEvent();
  }

  function inputACB(event) {
    props.searchTextWrittenCustomEvent(event.target.value);
  }

  function selectACB(event) {
    props["type"] = event.target.value;
    props.dishTypeSelectedCustomEvent(event.target.value);
  }
}

export default searchFormView;
