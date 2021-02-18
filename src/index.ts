enum Permission {
    Read = 1,
    Write = 2,
    Create = 4,
    Delete = 8
}

let p: Permission = Permission.Read | Permission.Write | Permission.Create

function hasPermission (target: Permission, per: Permission) {
    return (target & per) === per
}
p = p ^ Permission.Create
console.log(hasPermission(p, Permission.Create))