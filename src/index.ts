import * as http from 'http';

http.get('http://www.example.com', (res) => {
    console.log(res.statusMessage);
});