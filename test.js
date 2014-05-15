var test = require('tape');
var request = require('request');
var server = require('index.js');

var s;
test('setup', function(t) {
    s = server({ port: 15555 }, t.end);
});

test('POST', function(t) {
    request.post('http://localhost:15555', { uri: 'https://npmjs.org' }, function(err, response) {
        t.equal(err, null, 'should not err');
        t.equal(response.statusCode, 302, 'should result in a \'302: found\'');
        t.equal(response.headers.location, 'http://localhost:15555/a', 'should return the shortened url in the \'location\' header');
        t.end();
    });
});

test('GET', function(t) {
    request('http://localhost:15555/a' function(err, response) {
        t.equal(err, null, 'should not err');
        t.equal(response.statusCode, 301, 'should result in a \'301: moved permanently\'');
        t.equal(response.headers.location, 'https://npmjs.org', 'should return the original url in the \'location\' header');
        t.end();
    });
});

test('teardown', function(t) {
    s.close(t.end);
});
