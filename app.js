// TODO
class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    }
  }

  // onListItemClick() {
  //   this.setState ({
  //     bought: !this.state.bought
  //   });
  // }

  onListItemHover() {
    this.setState ({
      bold: !this.state.bold
    })
  }

  render() {
    let style = {
      fontWeight: this.state.bold ? 'bolder' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}
  var GroceryList = (props) => (
      <ul>
        {props.items.map( (item, i) =>
          <GroceryListItems key={i} item={item}/>
          )}
      </ul>
  );


ReactDOM.render(
  <GroceryList items={['orange', 'apple']}/>,
  document.getElementById('app')
);