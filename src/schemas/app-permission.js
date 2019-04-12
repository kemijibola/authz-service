module.exports = {
    "id": "ApplicationPermission",
    "properties": {
        "application": {
            "type": "object",
            "description": "The microservice that is being configured",
            "$ref": "Application"
        },
        "permissions": {
            "type": "array",
            "description": "List of all actions that can be performed on the microservice",
            "items": {
                "$ref": "Permission"
            }
        }
    }
}