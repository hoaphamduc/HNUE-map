// get element
var searchBar = document.getElementById('search-bar');
var searchInput = document.querySelector('.search-bar_input');
var listResult = document.getElementById('list-result');
var listResult0 =document.getElementById('list-result_li0');
var listResult1 =document.getElementById('list-result_li1');
var listResult2 =document.getElementById('list-result_li2');
var listResult3 =document.getElementById('list-result_li3');
var searchAction = document.getElementById('search-bar_action');
var iconSearch = document.getElementById('search-bar_icon-search');
var iconClose = document.getElementById('search-bar_icon-close');

// Value
var onShowPopupSearch = false;
var jsonSearchData;
var allResult;


// Add event
searchInput.addEventListener('touchstart', onClickSearchBar);
searchInput.addEventListener('input', onSearch)
searchAction.addEventListener('touchstart', function(event){
    if(!onShowPopupSearch) return;

    changeStatusSearch(false);
});
listResult0.addEventListener('touchstart', function(event){
    openLocationOnMap(0);
});
listResult1.addEventListener('touchstart', function(event){
    openLocationOnMap(1);
});
listResult2.addEventListener('touchstart', function(event){
    openLocationOnMap(2);
});
listResult3.addEventListener('touchstart', function(event){
    openLocationOnMap(3);
});


// define function
function onClickSearchBar()
{
    if(this.onShowPopupSearch) return;
    
    changeStatusSearch(true);
}

function activateAnimation() {
    var searchBarAnimation = document.querySelector("#search-bar_animation");
    searchBarAnimation.classList.remove("inactive");
    searchBarAnimation.classList.add("active");

    var toolBar = document.querySelector("#tool-bar");
    toolBar.classList.remove("inactive");
    toolBar.classList.add("active");

    var searchBar = document.querySelector("#search-bar");    
    searchBar.classList.remove("inactive");
    searchBar.classList.add("active");

    listResult.style.display = 'flex';

    const body = document.body;
    const html = document.documentElement;

    body.addEventListener('touchmove', preventScroll, { passive: false });
    html.addEventListener('touchmove', preventScroll, { passive: false });
}
  
function deactivateAnimation() {
    var searchBarAnimation = document.querySelector("#search-bar_animation");
    searchBarAnimation.classList.remove("active");
    searchBarAnimation.classList.add("inactive");

    var toolBar = document.querySelector("#tool-bar");
    toolBar.classList.remove("active");
    toolBar.classList.add("inactive");
    setTimeout(function() {
        positionToolBar = 217.363;
        toolBar.style.transform = 'translateY(' + 217.363 + 'px)';
        toolBar.classList.remove("inactive");
      }, 300);

    var searchBar = document.querySelector("#search-bar");
    searchBar.classList.remove("active");
    searchBar.classList.add("inactive");

    listResult.style.display = 'none';

    const body = document.body;
    const html = document.documentElement;

    body.addEventListener('touchmove', preventScroll, { passive: true });
    html.addEventListener('touchmove', preventScroll, { passive: true });
}

async function loadJsonFile(pathFile) {
    try {
        const response = await fetch(pathFile);
        return await response.json();;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadData() {
    this.jsonSearchData = await loadJsonFile('data/search-data.json'); 
    console.log(this.jsonSearchData);
}

function onSearch(event) {
    console.log(searchInput.value);
    searchWithKey(searchInput.value);
}

function searchWithKey(rawKey) {
    var keysArray = jsonSearchData.map(function(item, index, array) {
        return item.key;
    });

    var key = stringToSlug(rawKey);
    allResult = [];
    for (let index = 0; index < keysArray.length; index++) {
        if(rawKey != "" && keysArray[index].includes(rawKey))
        allResult.push(keysArray[index]);
    }

    // Turn off all result
    listResult0.style.display = 'none';
    listResult1.style.display = 'none';
    listResult2.style.display = 'none';
    listResult3.style.display = 'none';

    // Turn on result
    for (let index = 0; index < allResult.length; index++) {
        var indexKey = jsonSearchData.findIndex(item => item.key.includes(allResult[index]));
        var key = document.getElementById('list-result_name_key' + index);
        key.innerHTML = jsonSearchData[indexKey].title;
        var description = document.getElementById('list-result_name_description' + index);
        description.innerHTML = jsonSearchData[indexKey].description;

        var li = document.getElementById('list-result_li' + index);
        li.style.display = 'flex';
    }
}

function stringToSlug(str) {
    // remove accents
    var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
        to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i=0, l=from.length ; i < l ; i++) {
      str = str.replace(RegExp(from[i], "gi"), to[i]);
    }
  
    str = str.toLowerCase()
          .trim()
          .replace(/[^a-z0-9\-]/g, '-')
          .replace(/-+/g, '-');
  
    return str;
}

function openLocationOnMap(index)
{
    var indexKey = jsonSearchData.findIndex(item => item.key.includes(allResult[index]));
    console.log(indexKey)
    switch (indexKey) {
        case 0:
            document.getElementById('infoDivC1').style.display = 'block';
            break;
            
        case 1:
            document.getElementById('infoDivV').style.display = 'block';
            break;
            
        case 2:
            document.getElementById('infoDivB2').style.display = 'block';
            break;
    
        default:
            break;
    }
    changeStatusSearch(false);
}

function changeStatusSearch(status) {
    this.onShowPopupSearch = status;
    if(this.onShowPopupSearch){
        activateAnimation();
        iconSearch.style.display = 'none';
        iconClose.style.display = 'block';
    }
    else{
        deactivateAnimation();
        iconSearch.style.display = 'block';
        iconClose.style.display = 'none';
    }
    
}

function preventScroll(event) {
    event.preventDefault();
}

// call function
loadData();