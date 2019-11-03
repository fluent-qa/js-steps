var observer = new MutationObserver(function (mutations, observer) {
    mutations.forEach(function(mutation) {
      console.log(mutation);
    });
  });

var article = document.querySelector('article');

var  options = {
  'childList': true,
  'attributes':true
} 
mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });