define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Login",
    "name": "wipKanbanApi",
    "group": "Authentication",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Login a user and generate token application</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://wipkanban.com/api/v1/user/login"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://<IPSERVER>/api/v1/login",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True to the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Usernotfound",
            "description": "<p>When email user is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Passwordinvalid",
            "description": "<p>When email exist, but the password does not matching.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"successr\": \"false\"\n  \"message\": \"User already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/apiRoutes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/v1/user/create",
    "title": "Creating account user",
    "name": "wipKanbanApi",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Create account user and send email confirmation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password unique ID.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://wipkanban.com/api/v1/user/create"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://<IPSERVER>/api/v1/user/create",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True or false to the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message success or fail.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>already exists When user with same email is send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"successr\": \"false\"\n  \"message\": \"User already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/apiRoutes.js",
    "groupTitle": "User"
  }
] });
