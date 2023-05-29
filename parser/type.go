package main

type records map[string]map[string]map[string]record

type record struct {
	Time string `json:"time"`
	Year int    `json:"year"`
	Name string `json:"name"`
}
