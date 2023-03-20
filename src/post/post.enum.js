const status = Object.freeze({
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
  TRASHED: "TRASHED",
});

const visibilityType = Object.freeze({
  PUBLIC: "PUBLIC",
  FREE: "FREE",
  PAID: "PAID",
});

module.exports = {
  status,
  visibilityType,
};
