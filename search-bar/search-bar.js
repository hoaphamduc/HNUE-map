// get element
var searchBar = document.getElementById('search-bar');
var searchInput = document.querySelector('.search-bar_input');

// Value
var onShowPopupSearch = false;
var jsonSearchData;


// Add event
searchInput.addEventListener('touchstart', onClickSearchBar);
searchInput.addEventListener('input', onSearch)


// define function
function onClickSearchBar()
{
    console.log("on click search bar")
    this.onShowPopupSearch = !this.onShowPopupSearch;
    if(this.onShowPopupSearch) 
    {
        activateAnimation();
        return;
    }
    else
    {
        deactivateAnimation();
        return;
    }
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

    console.log(key);
    
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

// call function
loadData();