String.prototype.isLetter = function () {
    return new RegExp("^([A-Z]|[a-z])$").test(this);
}