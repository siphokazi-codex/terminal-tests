module.exports = function findItemsOver20(itemList){

 var list = [];
 var listQuantity = 0;
  for(var i=0;i<itemList.length; i++){
  listQuantity = itemList[i];
  if (listQuantity.qty > 20)
    list.push(listQuantity);
}
    console.log(list);
    return list;
}
