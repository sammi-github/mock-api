
# Get Single Candidate

Get detailed information about a single candidate. Candidate ID must be passed as a path parameter.

**URL** : `/candidate/{id}`

**Path Parameter** : `{id} (the candidate's unique ID)`

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

        "candidate_id": 111111,
        "name": "Angelos Angelos",
        "answer_station_1": "This is a mock answer for Station 1.",
        "station_progress": 
        {
            "station_1": true,
            "station_2": false,
            "station_3": false
        }
    }


    ,
    "headers":
    {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    }

}
```
