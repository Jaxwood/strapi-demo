# 🚀 Strapi Demo

[![Docker Image CI](https://github.com/Jaxwood/strapi-demo/actions/workflows/docker-image.yml/badge.svg?branch=main)](https://github.com/Jaxwood/strapi-demo/actions/workflows/docker-image.yml)

## Docker

Run the following command to build the image:

```sh
docker build -t strapi-demo .
```

## Minikube

Run the following command to start minikube:

```sh
minikube start
minkube addons enable ingress
minikube image load strapi-demo
```

## Helm

Run the following command to install the chart:

```sh
helm upgrade --install -n strapi strapi-demo .
```

Run the following command to allow ingress

```sh
minikube tunnel
```

## Navigate to the Application

Open the following [URL](https://strapi.localhost/admin) in your browser
