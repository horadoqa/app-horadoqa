# LOGS

docker ps -a
CONTAINER ID   IMAGE                         NAMES
3c56acc98d0a   app-horadoqa-frontend:1.0.1   app-horadoqa-frontend-1
c1835d455cfa   app-horadoqa-backend:1.0.1    app-horadoqa-backend-1
606feec1b431   redis:7.4.1                   app-horadoqa-redis-1
c721ce80781d   postgres:13                   app-horadoqa-db-1


docker ps -a | awk 'NR>1 {print $1}'

69c98964770e
8d48c84be66a
f9e456cef367
d610fa69f05a

docker logs 69c98964770e
docker logs 8d48c84be66a
docker logs f9e456cef367
docker logs d610fa69f05a