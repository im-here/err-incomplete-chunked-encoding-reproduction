package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("api/v1/test", testHandler)
	if err := r.Run(":3001"); err != nil {
		panic(err)
	}
}

func testHandler(ctx *gin.Context) {
	data := make([]string, 0, 5000)
	for i := 0; i < 5000; i++ {
		data = append(data, fmt.Sprintf("%dABCD", i))
	}
	ctx.JSON(http.StatusOK, gin.H{"code": 0, "message": "success", "data": data})
}
