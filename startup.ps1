$HOSTIP=ipconfig | Select-String -Pattern "IPv4"
$HOSTIP=($HOSTIP[0] -Split ":")[1].trim()
echo "Host IP: $HOSTIP"
docker run -d -p 6379:6379 --rm --name redis redis:6.0.6
sleep 5
docker run -d -p 5353:5353 --add-host host:$HOSTIP --rm --name hydra-router pnxtech/hydra-router:1.7.0
