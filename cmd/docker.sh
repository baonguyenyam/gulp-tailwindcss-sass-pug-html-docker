docker build -t web-app .
docker tag web-app:latest web-app:latest
docker push web-app:latest
docker run -d --name web-app -p 80:3000 web-app:latest