# LEADS 
JSON file for sample data for leads form:  

1. Lead ID  
1. First Name ** 
1. Last Name **  
1. Title    
1. Department  

1. Account Type  
1. Sells Rep **   
1. Email **  
1. Lead Source  
1. Phone  

1. Status  




1. account name [+]
1. billing address1 [+]
1. billing address2 [+]
1. billing city [+]
1. billing country [+]

1. billing postal [+]
1. billing state [+]
1. corp identity [+]
// 1. country code
// 1. country code

1. department
1. description
1. email
1. exten.
1. fa

1. first name
1. last name
1. lead source
1. lead source
1. notes.

1. phone
1. phone
1. referred by.
1. sales rep
1. shipping address1

1. shipping address2
1. shipping city.
1. shipping country.
1. shipping postal.
1. shipping state.
1. status.

1. title
1. website.

---  


## DATA: Table Of Contents. 

## .00 LIStUS  **  


```   
## .02 LAST NAME **  
**Type**: String
**Required**: True  
**Description**: The user's last name.
```JSON 
[
  {
    "last_name": "Doe"
  }
]
``` 
## .03 TITLE 
**Type**: String
**Required**: False  
**Description**: The user's work title.
```JSON 
[
  {
    "title": "Janitor"
  }
]
``` 
## .04 DEPARTMENT 
**Type**: String  
**Required**: False  
**Description**: The department the user is assigned to.
```JSON 
[
  {
    "department": "Custodian"
  }
]
``` 
## .05 ACCOUNT NAME  
**Type**: String  
**Required**: False  
**Description**: The account name for this lead.
```JSON 
[
  {
    "account_name": "Elaine Benes"
  }
]
``` 
## .06 SALES REP **   
**Type**: String  
**Required**: True  
**Description**: The sales rep for this lead.
```JSON 
[
  {
    "sales_rep": "George Costanza"
  }
]
```  
## .07 EMAIL **  
**Type**: String  
**Required**: True  
**Description**: The user's email address.
```JSON 
[
  {
    "email": "elaine.benes@domainname.com"
  }
]
```  
## .08 LEAD SOURCE    
**Type**: String[]  
**Required**: True  
**Description**: The user's email address.
```JSON 
[
  "lead_source": [
    "Cold Call",
    "Existing Customer",
    "Self Generated",
    "Employee",
    "Partner",
    "Public Relations",
    "Direct Mail",
    "Conference",
    "Trade Show",
    "Website",
    "Word Of Mouth",
    "Email",
    "Campaign",
    "Other"
  ]
]
```  
## .09 PHONE  
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
```
## STATUS  
**Type**: String  
**Required**: False  
**Description**: The user's status as a lead.
```JSON 
[
  "status": [
    "converted",
    "inactive",
    "new"
  ]
]
```
## .11 CORPORATE IDENTITY    
**Type**: String  
**Required**: False  
**Description**: The user's coporate identity.
```JSON 
[
  "coporate_identity": [
    "incorporatated"
  ]
]
```
## .12 DESCRIPTION      
**Type**: String  
**Required**: False  
**Description**: The description of the user lead.
```JSON 
[
  "description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
## .13 NOTES      
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
## .14 REFERRED BY      
**Type**: String  
**Required**: False  
**Description**: ?????
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```

## .15 REFERRED BY PHONE  
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
```
## .15 FAX 
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
```
## .16 Website
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
````
```
## .17 Website
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
````




## .15 LEAD SOURCE       
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```  


```
## .15 LEAD SOURCE       
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
  lead source.
  country code.
  phone
  fax 
  website.
  billing address1
  billing address2
  billing city.
  billing state.
  billing postal.
  billing country.
  shipping address1
  shipping address2
  shipping city.
  shipping state.
  shipping postal.
  shipping country.

  "address" [
    {
      type: ["billing", "shipping"],
      "address1":  "100 N Central Expy",
      "address2":  "1125"
      "city" "Richardson",
      "state": [
        "abrreviatoon": "",
        "nick": "",
        full_name: 802,
        contry,
        post coporate_identity
      ]
    }
  ]