/**
 * @Author lester
 * @Date 2021-01-13
 */

const http = new XMLHttpRequest();
http.open( 'POST','/api/schemeList', true);
// http.setRequestHeader('Content-Type', 'application/json');
http.send({
  name: 'lester'
});
http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    console.log(http.responseText)
    console.log(JSON.parse(http.responseText))
  }
};
