function createLi(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}

function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let friend of friends) {
    ul.appendChild(createLi(`${friend.firstName} ${friend.lastName}`));
  }
  return ul;
}
