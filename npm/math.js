function add(n, m) {
  return n + m;
}

module.exports = {
  add,
  isAdmin: false
};

/*
the above really is:
module.exports = {
  add: add
};
*/