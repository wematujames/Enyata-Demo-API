
# EnyataDemo



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [Create Incident](#1-create-incident)
1. [Create new incident](#2-create-new-incident)
1. [Create new incident](#3-create-new-incident)



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



### 3. Create new incident


Get all incidents


***Endpoint:***

```bash
Method: GET
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

>Generated at 2022-09-13 14:17:06 by [docgen](https://github.com/thedevsaddam/docgen)
