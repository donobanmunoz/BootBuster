import React, { Component } from "react";
import PostList from './PostList.jsx';
import AddAddress from './AddAddress.jsx';

class HistoryComp extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address:'',
        items: []
      };
      this.addItem = this.addItem.bind(this);
      this.postData = this.postData.bind(this);
    }





    postData(url = '', data = {}) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          console.log('hello');
          console.log(response);
          response.json()
          console.log('history', history)
        })
        .then(() => {
          console.log('geting data')
          this.getData(history)
        })
        .catch(err => {
          console.error('error after get data', err)
        });
    }

    addItem(description) {
      let { items } = this.state;
      const newItem = {
        id: items.length + 1,
        description,
      };
      const existingIndex = item.findIndex(
        item => item.description === newItem.description
      );
    }

    render() {
      const { items } = this.state;
      console.log(this.state.items);
      return (
        <div>
          <AddAddress addItem={this.addItem} postData={this.postData} />
            <div className="addAddress">
            <PostList items={items} />
            </div>
        </div>
      );
    }
  };
export default HistoryComp;
