module.exports = {
    "id": "RolePermission",
    "properties": {
        "role_id": {
            "type": "string",
            "description": "Id of role"
        },
        "permissions": {
            "type": "array",
            "description": "List of assigned permissions",
            "$ref": "Permission"
        },
        "owner_id": {
            "type": "string",
            "description": "The microservice that role is being configured on. "
        }
    }
}