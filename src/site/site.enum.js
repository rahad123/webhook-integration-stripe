const status = Object.freeze({
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
});

module.exports = {
  status,
  statuses: Object.values(status),
};
