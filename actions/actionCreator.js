export const increment = (index) => ({
  type: "INCREMENT_LIKES",
  index,
});

export const addComment = (resourceId, author, comment) => ({
  type: "ADD_COMMENT",
  resourceId,
  author,
  comment,
});

export const removeComment = (resourceId, i) => ({
  type: "REMOVE_COMMENT",
  i,
  resourceId,
});
