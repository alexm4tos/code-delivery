package main

import (
	"fmt"
	"log"

	kafka2 "github.com/alexm4tos/code-delivery/simulator/application/kafka"
	"github.com/alexm4tos/code-delivery/simulator/infra/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("error loading .env file")
	}
}

func main() {
	messageChannel := make(chan *ckafka.Message)
	consumer := kafka.NewKafkaConsumer(messageChannel)

	go consumer.Consume()

	for msg := range messageChannel {
		fmt.Println(string(msg.Value))

		go kafka2.Produce(msg)
	}
}
