import React, { Component } from 'react';
import Slider from './Slider';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="container">
          <header>
            <h1>Page 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p className="tagline">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
            deleniti atque corrupti quos dolores et quas molestias.</p>
          </header>        
        </div>
       <main>
        <div className="container">
           <Slider />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
             <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
               quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
               deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam 
               libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
               omnis voluptas assumenda est, omnis dolor repellendus. </p>
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
              consequatur</p>
            </div>

          </div>
          <div className="row tagging">
            <div className="col">
              <h3>Tags</h3> 
              <a href="http://www.haymarket.com/">DONECT</a> &nbsp; | &nbsp;
               <a href="http://www.haymarket.com/">PHASELLUS</a> &nbsp; | &nbsp;
               <a href="http://www.haymarket.com/">OBORTIS</a>
            </div>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
