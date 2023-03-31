# Webhook Integration with Stripe
#### This app is designed for a webhook event that will be triggered when using Stripe(Payment Method). Basically, It's like a CMS, where user can create their site and make their post. In here, I used Node.js and MongoDB. I tried to follow TDD approach to built the apis. 

## Requirements
 - Docker ([Documentation](https://www.docker.com/get-started/))
 - Docker Compose
 - Node.js ([Download](https://nodejs.org/en))
 - NPM (Will be download with Node.js)

 #### There are two part of this project.
  - Backend - Nodejs + MongoDB ( http://localhost:3000 )

## Installation
 - Copy .env.example to .env
  ```
   cp .env.example .env
  ``` 

## Run Docker
```
npm run dev:docker
```

If you need to Re-Run docker, you should remove the container which was created before
```
npm run dev:docker:down
```
## APIs
I have attached all APIs here as well. For more details abouts APIs, visit this http://localhost:3000/api/v1/docs/ to see api documentation.
## Tests
- For testcase you can run
```
npm run test:docker
```

