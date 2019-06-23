import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className='main-footer'>
      <div class='text-center text-outline'>
        <p>
          Made with lots of <i class='fas fa-heart' id='heart' /> utilizing
          these technologies:
        </p>
      </div>
      <div class='text-center text-outline'>
        <pre class='tab'>
          <i class='fab fa-github fa-2x' />
          <i class='fab fa-js-square fa-2x' />
          <i class='fab fa-react fa-2x' />
          <i class='fab fa-html5 fa-2x' />
        </pre>
      </div>
      <div class='text-center text-outline' id='copyright'>
        <span>
          Copyright <i class='far fa-copyright' /> 2019 by Enzo Fassioli
        </span>
      </div>
    </div>
  );
}

export default Jumbotron;
