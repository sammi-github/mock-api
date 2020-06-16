# Get All Stations

Get quick information about all stations.

**URL** : `/stations`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "statusCode": 200,
    "body":
    {

        "stations": [
            {
                "station_1":
                {
                    "station_title": "Station 1 Title",
                    "station_scenario": "This is the scenario for station 1. It is a mock description for the scenario of station 1. Please answer station 1."
                }


            },
            {
                "station_2":
                {
                    "station_title": "Station 2 Title",
                    "station_scenario": "This is the scenario for station 2. It is a mock description for the scenario of station 2. Please answer station 2."
                }


            }

        ]

    }


    ,
    "headers":
    {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    }

}
```
