## Look README inside folders client-react and service


## run as single service and client
Start your redis services at port 6379
example
    - docker run --name redis -d -p 6379:6379 redis

cd in service folder and rename .env.example as .env to add the key and port
exec
    - npm start

cd in client-react
exec
    -npm start

## Run with docker swarm

### Build your image
docker build -t people . 

### Deploy in swarm
docker stack deploy --compose-file=docker-compose.yml staging

### To watch containers created
docker ps

### to watch the services created
docker service ls

### To scale
docker service scale staging_people=50

### Run
cd client-react and npm start


