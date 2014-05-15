var test = require('tape');
var request = require('request');
var server = require('index.js');

var s;
test('setup', function(t) {
    s = server({ port: 15555 }, t.end);
});

test('POST', function(t) {
    request.post('http://localhost:15555', { uri: 'http://npmjs.org' }, function(err, response) {
        t.equal(err, null, 'should not err');
        t.equal(response.statusCode, 302, 'should result in a \'302: found\'');
        t.equal(response.headers.location, 'should return the shortened url in the \'location\' header');
        t.end();
    });
});

test('teardown', function(t) {
    s.close(t.end);
});
