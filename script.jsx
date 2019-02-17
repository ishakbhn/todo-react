class List extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    list : [],
    word : ""
  }

  handleChange(event){
    this.setState({
        word: event.target.value
    });
    console.log("change", event.target.value);
  }

  handleSubmit(event){
    event.preventDefault();
    let addArray = this.state.list;
        if(addArray.length != 0) {
            addArray.push(this.state.word)
        } else {
            addArray = [this.state.word]
        }
    this.setState({
        word: '',
        list: addArray
    })
  }

  render() {
      const Lists = this.state.list.map((item, index)=>{
        return  <li key={index}>{item}</li>
      })
      console.log("rendering");
      return (
        <div className="list">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.word} />
            <button type="submit"> add item </button>
          </form>
          <ul>
           {Lists}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);