'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_cek__pKwOl {\n  color: red; }\n";
styleInject(css);

var css$1 = ".Hello_Hello__K_TAF {\n  font-size: 24px;\n  color: #aaa;\n  -webkit-transform: skew(30deg, 20deg);\n          transform: skew(30deg, 20deg); }\n  .Hello_Hello--info__3Bip0 {\n    color: blue; }\n  .Hello_Hello--warning__2h6wO {\n    color: #f0ad4e; }\n  .Hello_Hello--danger__1Ou-M {\n    color: #bb2124; }\n\n.Hello_Hello-other__2fL5O {\n  color: yellow; }\n";
var styles$1 = {"Hello":"Hello_Hello__K_TAF","Hello--info":"Hello_Hello--info__3Bip0","Hello--warning":"Hello_Hello--warning__2h6wO","Hello--danger":"Hello_Hello--danger__1Ou-M","Hello-other":"Hello_Hello-other__2fL5O"};
styleInject(css$1);

function Hello(props) {
    return (React.createElement("h1", { className: styles$1['Hello--info'] }, props.text));
}

// /**

exports.Hello = Hello;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCJzcmMvY29tcG9uZW50cy9IZWxsby9pbmRleC50c3giLCJzcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWxsby5zY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBJSGVsbG9Qcm9wcyB7IHRleHQ6IHN0cmluZzsgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbyhwcm9wczogSUhlbGxvUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXNbJ0hlbGxvLS1pbmZvJ119PlxuXHRcdFx0e3Byb3BzLnRleHR9XG5cdFx0PC9oMT5cblx0KTtcbn1cblxuIiwiLy8gLyoqXG4vLyAgKiBQcm9kaWcgbWFpbiBmaWxlXG4vLyAgKiBAZGVzYyBpdCBzaG91bGQgaW1wb3J0IGFuZCBleHBvcnRzIGFsbCBuZWVkZWQgYXNzZXRzKGUuZy4gY29tcG9uZW50cywgc3R5bGVzKVxuLy8gICovXG5cbi8vIC8vXG4vLyAvLyBTVFlMRVNcbi8vIC8vXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy9cbi8vIC8vIElNQUdFU1xuLy8gLy9cbi8vIGltcG9ydCAnLi9pbWFnZXMvYmctcGF0dGVybi5zdmcnO1xuXG4vLyAvL1xuLy8gLy8gRk9OVFNcbi8vIC8vXG4vLyBpbXBvcnQgJy4vZm9udHMvcHJvb2ZuLWljb24uZW90Jztcbi8vIGltcG9ydCAnLi9mb250cy9wcm9vZm4taWNvbi50dGYnO1xuLy8gaW1wb3J0ICcuL2ZvbnRzL3Byb29mbi1pY29uLndvZmYnO1xuXG4vLyAvL1xuLy8gLy8gQ09NUE9ORU50c1xuXG4vLyAvL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWxsbyB9IGZyb20gJy4vY29tcG9uZW50cy9IZWxsbyc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEhlbGxvQWdhaW4gfSAgZnJvbSAnLi9jb21wb25lbnRzL0hlbGxvQWdhaW4nO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uIH0gIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbiJdLCJuYW1lcyI6WyJSZWFjdC5jcmVhdGVFbGVtZW50Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDLE1BQU07TUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO0dBQ0YsTUFBTTtJQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDekI7O0VBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO0lBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztHQUNoQyxNQUFNO0lBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDakQ7Q0FDRjs7Ozs7Ozs7O1NDcEJ1QixLQUFLLENBQUMsS0FBa0I7SUFDL0MsUUFDQ0EsNEJBQUksU0FBUyxFQUFFQyxRQUFNLENBQUMsYUFBYSxDQUFDLElBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQ1AsRUFDSjtDQUNGOztBQ1hELE1BQU07Ozs7In0=
