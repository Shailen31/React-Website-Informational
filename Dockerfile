FROM node:alpine 
#pull node image with alpine tag. 

WORKDIR /app 
# create app folder in root directory in the container and also CD's into it 

COPY package.json . 
# copy package.json to the current directory which is the /app 
# it looks for the package.json in the same directory that the DockerFile is in 

RUN npm install 
# install all node modules in current directory which is /app

EXPOSE 3001

COPY . . 
# so this will copy the contents of where ever the DockerFile is (the first . (current dir of the Docker file)) to where ever the current working dir is (the second .)

CMD ["npm", "start"]
# this tells docker how to run your application. (in a c# app it would be CMD["dotnet", "run"])

# to run the image do a "docker build -t anynameforimage . " --> in the root dir where the dockerfile is 
# then do a "docker run -p 3001:3000 -d anynameforimage" --> -p specifies the port, the port on the rhs of the ":" is whatever port it runs on locally and on the lhs it is whatever port you specify it to run in the container
#                                                            -d runs it in the background and then you put the name of the image afterwards. 

# to acces the container you use the container ID that you get from the docker run step