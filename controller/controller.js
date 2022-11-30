const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === parseInt(id);
  });
};


module.exports = getElementById