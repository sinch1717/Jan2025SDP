package main

import (
	//"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Flight struct{
	Id string
	Number string
	AirlineName string
	Source string
	Destination string
	Capacity int
	Price float32
}

func readAllFlights( c *gin.Context) {
	flights := [] Flight {
		{Id: "1001", Number: "AI 653", AirlineName: "Air India", Source: "Mumbai", Destination: "Abu Dhabi", Capacity: 180, Price: 15000.0},
		{Id: "1002", Number: "AI 673", AirlineName: "Air India", Source: "Mumbai", Destination: "Abu Dhabi", Capacity: 180, Price: 18000.0},
	}
	c.JSON(http.StatusOK, flights)

}

func main() {
	// router
	r := gin.Default()
	// routes | API Endpoints
	r.GET("/flights", readAllFlights)
	// server (default port 8080) //r.Run(":8080")
	r.Run()

	
	//fmt.Println(flights)
}