package kafka

import (
	"encoding/json"
	"log"
	"os"
	"time"

	"github.com/alexm4tos/code-delivery/simulator/application/route"
	"github.com/alexm4tos/code-delivery/simulator/infra/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
)

func Produce(message *ckafka.Message) {
	producer := kafka.NewKafkaProducer()
	route := route.NewRoute()
	json.Unmarshal(message.Value, &route)

	route.LoadPositions()

	positions, err := route.ExportJsonPositions()

	if err != nil {
		log.Println(err.Error())
	}

	for _, p := range positions {
		kafka.Publish(p, os.Getenv("KAFKA_PRODUCE_TOPIC"), producer)
		time.Sleep(time.Millisecond * 500)
	}
}
