const slugify = require("slugify");
const { replace } = require("lodash");

module.exports = (name, attacher = "-") => {
  //if there are any underscore( _ ) then replace all of them with dash( - )
  return slugify(replace(name, /_/g, attacher), {
    replacement: attacher,
    strict: true,
    trim: true,
  });
};
