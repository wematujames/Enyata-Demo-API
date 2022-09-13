
_There is a live URL for to try out the API, I however included in the email only for security reasons since it references the public IP of the aws server. Also there's no SSL configuration you so it can only access it via the http protocol._

# EnyataDemo



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [Create Incident](#1-create-incident)
1. [Create new incident](#2-create-new-incident)



## Endpoints


--------



Endpoints relatings incidents



### 1. Create Incident


Endpoint to create a new incident


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/incidents/1
```



### 2. Create new incident


Create a new incident record


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/incidents/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "client_id": 1,
    "incident_desc": "null",
    "city": "ACCRA",
    "country": "GHANA"
}
```



---
[Back to top](#enyatademo)

>Generated at 2022-09-13 13:42:36 by [docgen](https://github.com/thedevsaddam/docgen)
