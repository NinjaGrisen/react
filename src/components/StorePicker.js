import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
   // constructor() {
   //    super();
   //    this.goToStore = this.goToStore.bind(this);
   // }
   myInput = React.createRef();


   //Set a arrow function to a property instead of a 
   //constructor to get this
   goToStore = (e) => {
      e.preventDefault();
      let storeName = this.myInput.value.value;
      this.props.history.push(`store/${storeName}`);
   }
   render() {
      return (
         <Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
               <h2>Please enter a store</h2>
               <input 
                  type="text" 
                  required
                  placeholder="Store name"
                  ref={this.myInput}
                  defaultValue={ getFunName() }
               />
               <button type="submit">Visit store</button>
            </form>
         </Fragment>
      )
   }
}

export default StorePicker;