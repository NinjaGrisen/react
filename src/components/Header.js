import React from 'react';

/* 
If its only returns a "stupid" template one way that might be more effective is a 
stateless functional components
*/

/* Normal react clase component
class Header extends React.Component {
   render() {
      return (
         <header className="top">
            <h1>Catch 
               <span className="ofThe">
                  <span className="of">Of</span>
                  <span className="the">The</span>
               </span>
               day</h1>
            <h3 className="tagline">
               <span>{this.props.tagline}</span>
            </h3>
         </header>
      )
   }
}*/

//stateless functional components

const Header = ({ tagline }) => (
   <header className="top">
      <h1>Catch 
         <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
         </span>
         day</h1>
      <h3 className="tagline">
         <span>{ tagline }</span>
      </h3>
   </header>
);

export default Header;