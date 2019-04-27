import React from 'react';

class AddAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      items:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {address
    e.preventDefault();
    const { address } = this.state;

    this.props.postData('/addAddress', {
      address: address.toLowerCase()
    });
    

  }

  render() {
    const { address} = this.state;
    console.log('this is the address:'+this.state.address);
    const { addItem, postData } = this.props;
    return (
      <div className='post'>
        <label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleInput}
          />
        </label>
        <button onClick={this.handleSubmit}>Add Address</button>
      </div>
    );
  }
}

export default AddAddress;
