class MyComponent extends Component {
    handleClick() {
      // Do something when the button is clicked
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>Click me</button>
      );
    }
  }
  
  export default MyComponent;