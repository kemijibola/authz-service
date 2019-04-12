module.exports = {
    "id": "RolePermission",
    "properties": {
        "roleId": {
            "type": "string",
            "description": "Id of role"
        },
        "permissions": {
            "type": "array",
            "description": "List of assigned permissions",
            "$ref": "Permission"
        },
        "owner": {
            "type": "object",
            "description": "The microservice that ",
            "$ref": "Application"
        }
    }
}