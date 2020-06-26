### Look README inside folders client-react and service

# Build your image
docker build -t people . 

# Deploy in swarm
docker stack deploy --compose-file=docker-compose.yml staging

# To watch containers created
docker ps

# to watch the services created
docker service ls

# To scale
docker service scale staging_people=50