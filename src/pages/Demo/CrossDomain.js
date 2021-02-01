/**
 * Created by Lester on 2021/1/21
 */


/*const script = document.createElement('script');
script.type = 'text/javascript';

// 参数为后端需要的数据和回调函数
script.src = 'http://www.otherdomain.com/userInfo?user=lester&callback=handleCallback';
document.head.appendChild(script);

function handleCallback(res) {
    // ...
    console.log(res);
    document.head.removeChild(script);
}

$.ajax({
    url: 'http://www.otherdomain.com/userInfo',
    type: 'get',
    dataType: 'jsonp',
    data: {
        user: 'lester'
    },
    success: function (res) {
        console.log(res)
    },
    error: function (err) {
        console.log(err)
    }
});

jsonp('http://www.otherdomain.com/userInfo?user=lester', null, function (err, res) {
    // ...
});

GET /cors HTTP/1.1
Origin: http://www.mydomain.com
Host: api.service.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

Access-Control-Allow-Origin: http://www.mydomain.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8

Access-Control-Allow-Credentials: true


const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.withCredentials = false;*/

/*
const url = 'http://api.service.com/cors';
const xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();

OPTIONS /cors HTTP/1.1
Origin: http://www.mydomain.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://www.mydomain.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.

Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000

server{
    # 监听9099端口
    listen 8000;
    # 域名是www.mydomain.com
    server_name www.mydomain.com;
    #凡是www.mydomain.com:8000/api这个样的请求，都转发到真正的服务端地址http://www.api.com:6000
    location ^~ /api {
        proxy_pass http://www.api.com:6000;
    }
}*/
