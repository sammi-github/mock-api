# SAMMI Mock API

SAMMI core mock API for use during development of video conferencing software plugin. All subject and open to change.

## API Key

As the API is private, you will need to sign all your requests with an API Key. Angelos will provide one. In your requests, set the value of the `x-api-key` header to the value of your API Key.

`x-api-key` : `1111111111aaaaaaaaaabbbbbbbbbb1111111111`


### Available endpoints

You can use all the below endpoints, if some other SAMMI core related functionality is needed, this can be added through a mock integration.

**API URL Direct** : `https://qeymwp4cs6.execute-api.eu-west-1.amazonaws.com/dev`
**API URL via our domain** : `https://api.sammi-select.co.uk/mock` [might not work]

* [Get quick information about all candidates](docs/candidates.md) : `GET /candidates`
* [Get more detailed information about a specific candidate](docs/candidate.md) : `GET /candidate/{id}`
* [Get quick information about all stations](docs/stations.md) : `GET /stations`
* [Get more detailed information about a single station](docs/station.md) : `GET /station/{station_id}`

The below might not be necessary initially but may be useful later on:
* [Get general status (none, in progess, done/ready) of feedback generation for a candidate](docs/candidatefeedbackstatus.md) : `GET /candidate/{id}/feedback/status`
* [Get overall feedback (all stations) for a candidate](docs/candidatefeedback.md) : `GET /candidate/{id}/feedback`
* [Get feedback for a specific candidate, for a specific station](docs/candidatefeedbackstation.md) : `GET /candidate/{id}/feedback/station/{station_id}`
* [Start feedback generation for a specific candidate, for a specific station](docs/candidatefeedbackstationgenerate.md) : `GET /candidate/{id}/feedback/station/{station_id}/generate`

