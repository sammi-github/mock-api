# Generate Candidate Feedback Station

Start feedback generation for a specific candidate, for a specific station

**URL** : `/candidate/{id}/feedback/station/{station_id}/generate`

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
        "station_id": 1,
        "message": "Feedback generation for [candidate 111111][station 1] started successfully..."

    }


    ,
    "headers":
    {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    }

}
```
