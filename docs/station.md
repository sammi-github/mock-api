# Get station

Get more detailed information about a single station.

**URL** : `/station/{station_id}`

**Path Parameter** : `{station_id} (the station's unique ID)`

**Auth required** : YES


## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
    "statusCode": 200,
    "body":
    {

        "station_title": "Station 1 Title",
        "station_scenario": "This is the scenario for station 1. It is a mock description for the scenario of station 1. Please answer station 1.",
        "station_attributes": [
            "attribute1", "attribute2", "attribute3"
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
