function showSalary(users, age) {
  let reducer = (acc, user, index) => {
    if (user["age"] <= age) {
      acc.push(`${user["name"]}, ${user["balance"]}`);
    }
    return acc;
  };
  return users.reduce(reducer, []).join('\n');
}
