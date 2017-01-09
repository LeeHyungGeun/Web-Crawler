function Filter (options) {
    let self = this;
    options = options || {};
    self.init(options);
}

Filter.prototype.init = function init (options) {
    let self = this;
}
Filter.prototype.isContains = function isContains (body, keyword) {
    let self = this;
    let regexp = new RegExp(keyword, 'ig');

    return regexp.test(body);
}
module.exports = Filter;

// [정규식 정리] ex- (?:pattern) pattern을 찾지만 검색한 문자열을 캡처하지 않습니다.
// http://fxrank.co.kr/wp/%EC%A0%95%EA%B7%9C%EC%8B%9D-%EC%A0%95%EB%A6%AC-ex-pattern-pattern%EC%9D%84-%EC%B0%BE%EC%A7%80%EB%A7%8C-%EA%B2%80%EC%83%89%ED%95%9C-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EC%BA%A1%EC%B2%98/

// MDN Regular Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions