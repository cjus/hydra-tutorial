## Test Cluster

## Build containers

```
$ cd red-service
$ docker build -t red-service:1.0.0 .
```

```
$ cd blue-service
$ docker build -t blue-service:1.0.0 .
```

```
$ cd green-service
$ docker build -t green-service:1.0.0 .
```

## Start cluster

```
$ ./startup.sh
```

## Shutdown cluster

```
$ ./shutdown.sh
```

## Websocket messages

Connect to: ws://localhost:5353

```
{
  "to": "35e6bc37ce994f0c8ca07e9e28136f89@hydra-router:[get]/v1/router/version",
  "frm": "1o6wsqaq1dn@client:/",
  "mid": "953bd2bc-e1c3-4fe2-acce-8ed4a5fef509",
  "ts": "2020-09-04T00:09:37.690Z",
  "ver": "UMF/1.4.6",
  "bdy": {
  }
}
```

```
{
  "to": "green-service:/",
  "frm": "11b67r0qqur@client:/",
  "mid": "953bd2bc-e1c3-4fe2-acce-8ed4a5fef509",
  "ts": "2020-09-04T00:09:37.690Z",
  "ver": "UMF/1.4.6",
  "bdy": {
  }
}
```

