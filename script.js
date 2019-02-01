class LinkedInUnfollow {
    constructor() {
      LinkedInUnfollow.unfollow();
    }

    static okToDelete(i) {

      let bank = ["junior", "web", "dev", "developer", "computer", "science", "coding", "epicodus", "software", "code", "portland", "ruby", "react", "javascript", "python", "data", "ucf", "university of central florida", "engineer", "program"]

      let str = document.getElementsByClassName("mn-connection-card__occupation t-14 t-black--light t-normal")[i].innerHTML.toLowerCase()

      if (bank.some(function(v) {return str.indexOf(v) >=0; })) {
        return false;
      } else return true;

    }

    static unfollow() {
      let menus = document.getElementsByClassName("dropdown-trigger mn-connection-card__dropdown-trigger ember-view")
      let test = setTimeout(function(){
        if (menus.length > 0) {
          let i;
          for (i in menus) {
            if (LinkedInUnfollow.okToDelete(i)) {
              menus[i].click();
              var remove = document.getElementsByClassName("display-flex align-items-center t-14 t-black--light t-normal");
              remove[0].click();
              var confirm = document.getElementsByClassName("mv2 artdeco-button artdeco-button--2 artdeco-button--primary ember-view");
              confirm[0].click();
            }
          }
        } else {clearInterval(test)}
      }, 100);
    }
  }
