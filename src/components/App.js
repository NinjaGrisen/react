import React, { Fragment } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
   render() {
      return (
         <Fragment>
            <div className="catch-of-the-day">
               <div className="menu">
                  <Header tagline="Fresh Seafood Daily"/>
               </div>
               <Inventory/>
               <Order/>
            </div>
         </Fragment>
      )
   }
}

export default App;