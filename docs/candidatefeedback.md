# Get All Candidate Feedback 

Get overall feedback (all stations) for a candidate

**URL** : `/candidate/{id}/feedback`

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
        "feedback":
        {
            "station_1":
            {
                "attribute1": 0.1234,
                "attribute2": 0.1234,
                "attribute3": 0.1234
            },
            "station_2": {
                "attribute1": 0.1234,
                "attribute2": 0.1234,
                "attribute3": 0.1234
            }
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
