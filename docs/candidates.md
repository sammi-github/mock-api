# Get All Candidates

Get quick information about all candidates.

**URL** : `/candidates`

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
        "all_candidates": [
        {
            "id": 111111,
            "name": "angelos"
        },
        {
            "id": 111112,
            "name": "john"
        }]
    },
    "headers":
    {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    }

}
```