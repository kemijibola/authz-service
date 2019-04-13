module.exports = function(db) {
    return {
        "ApplicationPermission": require('./app-permission')(dv),
        "Permission": require('./permission')(db),
        "RolePermission": require('./role-permission')(db)
    }
}