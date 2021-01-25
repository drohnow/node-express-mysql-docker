# node-express-docker

Basic NodeJS application utilizing Docker.

## Usage

With Docker installed, navigate to the repo and run

```bash
docker build -t <name_goes_here> .
```

Then, once the image has been built, run the following command to start the image

```bash
docker run -p 49160:8080 [-d] <name_goes_here>
```

Arguments:
`-p` to map the port (public:private)
`-d` to run in detached mode

Other commands:

- To view all the containers running right now, run

```bash
docker ps
```

- To print container's output, run

```bash
docker logs <container_id>
```

To go inside of a container, run

```bash
docker exec -it <container_id> /bin/bash
```

For more information consider visiting [the official "Dockerizing a Node.js" article](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
