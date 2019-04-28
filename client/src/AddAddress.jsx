import React from 'react';
import $ from 'jquery';

class AddAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      items:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }
  componentWillMount(){
    this.getData();
  }
  getData(){
    console.log('i am hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
   $.ajax({
   url: '/address',
   method: 'GET',
   success: (data) => {
     this.setState({
       items:data
     });
   },
   error: (xhr, err) => {
     console.log('err', err);

     }
   })
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
    const { address } 	managed to create an alarm/ bugg with the alert pop up= this.state;

    this.props.postData('/addAddress', {
      address: address.toLowerCase()
    });


  }

  render() {

    const { address} = this.state;

    console.log('this is the address:'+this.state.address);


    const { addItem, postData } = this.props;

    const places = this.state.items.map( lugar =>{
      return (
        <li> {lugar.address}</li>
      )
    })
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
        <div>{places}</div>
      </div>
    );
  }
}

export default AddAddress;
