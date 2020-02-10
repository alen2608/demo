
Date.prototype.getTWYear = function () {
    return this.getFullYear() - 1911;
}

Date.prototype.getCWeek = function () {
    let w = this.getDay();  // 0 - 6
    let cw = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    return cw[w];
}