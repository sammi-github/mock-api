# Get Feedback Status

Get general status (none, in progess, done/ready) of feedback generation for a candidate

**URL** : `/candidate/{id}/feedback/status`

**Path Parameter** : `{id} (the candidate's unique ID)`

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
        "feedback_status": 
        {
            "station_1": "none",
            "station_2": "in-progress",
            "station_3": "ready"
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
