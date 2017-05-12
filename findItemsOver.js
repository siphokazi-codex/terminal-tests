module.exports = function findItemsOver(items, threshold){

 var itemsOver = [];
 var listQuantity = 0;
 var checkThreshold = 0;
  for(var i=0;i<items.length; i++)
  {
    listQuantity = items[i];

    if (listQuantity.qty > threshold)
    {
     //checkThreshold = threshold - listQuantity.qty;
     itemsOver.push(listQuantity);
    }
  }
    console.log(itemsOver);
    return itemsOver;
}
