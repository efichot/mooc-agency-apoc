import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './js/controllers/App';
// import registerServiceWorker from './registerServiceWorker';
import smoothscroll from 'smoothscroll-polyfill';

/*------------------------------------*/
/*POLYFILLS*/
/*------------------------------------*/

smoothscroll.polyfill();

if (!NodeList.prototype.forEach) {
  /*console.log('ça ne marche pas');*/
  NodeList.prototype.forEach = function(fn, scope) {
    let i, len;
    for (i = 0, len = this.length; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };
}
if (!String.prototype.includes) {
  console.log('no includes proto');
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" est nul ou non défini');
      }

      // 1. Soit o égal à ? Object(cette valeur).
      var o = Object(this);

      // 2. Soit len égal à ? Length(? Get(o, "length")).
      var len = o.length >>> 0;

      // 3. Si len = 0, renvoyer "false".
      if (len === 0) {
        return false;
      }

      // 4. Soit n = ? ToInteger(fromIndex).
      // Pour la cohérence du code, on gardera le nom anglais "fromIndex" pour la variable auparavant appelée "indiceDépart"
      //    (Si fromIndex n'est pas défini, cette étape produit la valeur 0.)
      var n = fromIndex | 0;

      // 5. Si n ≥ 0,
      //  a. Alors k = n.
      // 6. Sinon, si n < 0,
      //  a. Alors k = len + n.
      //  b. Si k < 0, alors k = 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Répéter tant que k < len
      while (k < len) {
        // a. Soit elementK le résultat de ? Get(O, ! ToString(k)).
        // b. Si SameValueZero(searchElement, elementK) est vrai, renvoyer "true".
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Augmenter la valeur de k de 1.
        k++;
      }

      // 8. Renvoyer "false"
      return false;
    },
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
