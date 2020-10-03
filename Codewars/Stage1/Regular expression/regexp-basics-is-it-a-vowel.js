String.prototype.vowel = function () {
    return !!(new RegExp("^[aeiou]$").exec(this.toLowerCase()));
};