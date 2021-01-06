@app
begin-app

@aws
region eu-central-1

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
