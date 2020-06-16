# Get Candidate Feedback Station

Get feedback for a specific candidate, for a specific station

**URL** : `/candidate/{id}/feedback/station/{station_id}`

**Path Parameter 1** : `{id} (the candidate's unique ID)`
**Path Parameter 2** : `{station_id} (the station's unique ID)`

**Auth required** : YES


## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
    "statusCode": 200,
    "body":
    {

        "candidate_id": 111111,
        "station_id": "station_1",
        "feedback": 
        {
            "attribute1": 0.1234,
            "attribute2": 0.1234,
            "attribute3": 0.1234
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
