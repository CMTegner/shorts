# shorts

A URL shortener.

# Install

```sh
npm install --global shorts
```

# Use

```sh
shorts --port 15555 &
curl -I -d '{"uri":"<long url>"}' http://localhost:15555
```
