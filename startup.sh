HOSTIP=`echo "show State:/Network/Global/IPv4" | scutil | grep PrimaryInterface | awk '{print $3}' | xargs ifconfig | grep inet | grep -v inet6 | awk '{print $2}'`
echo "Host IP: ${HOSTIP}"
docker run -d -p 6379:6379 --rm --name redis redis:6.0.6
sleep 5
docker run -d -p 5353:5353 --add-host host:${HOSTIP} --rm --name hydra-router pnxtech/hydra-router:1.7.0

