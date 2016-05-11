var url = 'tutu.toto@hetic.net';
var regex = /[a-z@\+.]{2,10}\.[a-z]{2,9}@hetic.net/;
console.log(regex.test(url));
