// TODO
let GroceryList = (props) => (
  <div id='app'>
    <ul>
      <li>{props.list[0]}</li>
      <li>{props.list[1]}</li>
    </ul>
  </div>
);


ReactDOM.render(
  <GroceryList list={['orange', 'apple']}/>,
  document.getElementById('app')
);