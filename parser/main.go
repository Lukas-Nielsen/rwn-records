package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"regexp"
	"strconv"
	"time"
)

func main() {
	year := time.Now().Year()

	data := map[string]map[string]records{"m": {"k": {}, "v": {}}, "w": {"k": {}, "v": {}}}
	data["m"]["k"] = getJsonData("m", "k")
	data["m"]["v"] = getJsonData("m", "v")
	data["w"]["k"] = getJsonData("w", "k")
	data["w"]["v"] = getJsonData("w", "v")

	input := parseInput(getInput())

	for _, v := range input {
		v := v
		age, _ := strconv.Atoi(v[3])
		ageDiff := year - age
		if ageDiff <= 16 {
			newTime := stringToTime(v[6])
			tempK := data[v[1]]["k"][v[5]][fmt.Sprint(ageDiff)]
			if val, ok := tempK[v[4]]; ok {
				recordKTime := stringToTime(val.Time)
				if newTime < recordKTime {
					fmt.Println("kreis: ")
					fmt.Println(v[1:], ageDiff)
				}
			}
			tempV := data[v[1]]["v"][v[5]][fmt.Sprint(ageDiff)]
			if val, ok := tempV[v[4]]; ok {
				recordKTime := stringToTime(val.Time)
				if newTime < recordKTime {
					fmt.Println("verein: ")
					fmt.Println(v[1:], ageDiff)
				}
			}
		}
		newTime := stringToTime(v[6])
		tempK := data[v[1]]["k"][v[5]]["open"]
		if val, ok := tempK[v[4]]; ok {
			recordKTime := stringToTime(val.Time)
			if newTime < recordKTime {
				fmt.Println("kreis offen: ")
				fmt.Println(v[1:])
			}
		}
		tempV := data[v[1]]["v"][v[5]]["open"]
		if val, ok := tempV[v[4]]; ok {
			recordKTime := stringToTime(val.Time)
			if newTime < recordKTime {
				fmt.Println("verein offen: ")
				fmt.Println(v[1:])
			}
		}
	}
}

func getInput() string {
	inputFile, err := os.Open("./input.txt")
	if err != nil {
		fmt.Println(err)
		return ""
	}
	defer inputFile.Close()
	byteValue, _ := io.ReadAll(inputFile)
	return string(byteValue)
}

func parseInput(data string) [][]string {
	r, _ := regexp.Compile(`(m|w).+?\s\t(.+?,\s.+?)\s\t([0-9]{4})\s\t([0-9]{2,4})(L|F|B|R|S).*\s\t([0-9]{1,2}:[0-9]{2},[0-9]{2})`)

	temp := r.FindAllStringSubmatch(data, -1)

	return temp
}

func getJsonData(g string, t string) records {
	jsonFile, err := os.Open("../public/data/" + g + "/" + t + "/" + fmt.Sprint(time.Now().Year()) + ".json")
	if err != nil {
		return nil
	}
	defer jsonFile.Close()
	byteValue, _ := io.ReadAll(jsonFile)
	var data records
	json.Unmarshal(byteValue, &data)
	return data
}

func stringToTime(stringTime string) float64 {
	r, _ := regexp.Compile(`(?:([0-9]{1,2}):)?([0-9]{1,2}):([0-9]{1,2})(?:,([0-9]{1,2}))?`)

	temp := r.FindStringSubmatch(stringTime)
	var callback float64 = 0
	if temp != nil {
		var tempInt int
		if len(temp[1]) > 0 {
			tempInt, _ = strconv.Atoi(temp[1])
			callback += float64(tempInt) * 60 * 60
		}
		if len(temp[2]) > 0 {
			tempInt, _ = strconv.Atoi(temp[2])
			callback += float64(tempInt) * 60
		}
		if len(temp[3]) > 0 {
			tempInt, _ = strconv.Atoi(temp[3])
			callback += float64(tempInt)
		}
		if len(temp[4]) > 0 {
			tempInt, _ = strconv.Atoi(temp[4])
			callback += float64(tempInt) * 0.01
		}
	}
	return callback
}
