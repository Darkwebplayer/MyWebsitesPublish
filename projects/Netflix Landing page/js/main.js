const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to item
    this.classList.add('tab-border');
    //Grab content items from
    const tabContentItem=document.querySelector('#'+this.id+'-content');
    //Add show class
    tabContentItem.classList.add('show');
}
//Remove borders before each 
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//Listen to tab clicks
tabItems.forEach(item => item.addEventListener('click',selectItem));

