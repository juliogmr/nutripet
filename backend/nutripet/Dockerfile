FROM openjdk:22-slim
WORKDIR /nutripet/backend
COPY ./target/nutripet-0.0.1-SNAPSHOT.jar nutripet.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "nutripet.jar"]
