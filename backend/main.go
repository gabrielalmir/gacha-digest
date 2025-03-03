package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Gacha Digest")
	})

	fmt.Println("Server running at port :8080")
	log.Fatalln(http.ListenAndServe(":8080", mux))
}
