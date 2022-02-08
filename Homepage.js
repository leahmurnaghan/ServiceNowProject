'use strict'

import * as DOM from './Homepagedom.js';

// search button function

const search = () => {
    axios.get(`/read/${DOM.hpsearch.value.toString()}`) // endpoint /read/search feature input 
      .then((response) => {
        DOM.singleOutput.innerHTML = JSON.stringify(response.data)
      }).catch((err) => {
        console.log(err);
      });
  };
  
  DOM.searchbutton.onclick = () => search();



  