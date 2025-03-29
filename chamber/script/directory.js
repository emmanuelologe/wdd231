// Directory cards built

let allList = new Array();

function construct(membersList) {
    allList = membersList;
      //console.log(allList);
      
    const Listing = document.querySelector("#gridList");
    allList.forEach((currentItem) => {
      const html = `<section>
      <img src='${currentItem.icon}' width = \'120px\'; height:\'120px\'>
      <h3>${'Business Name: ' + currentItem.name}</h3>
      <h4>${'Address: ' + currentItem.address}</h4>
      <h4>${'Phone Number: ' + currentItem.phonenumber}</h4>
      <h4>Website: <a href="${currentItem.website}" target="_blank">${currentItem.website}</a> </h4>
      <h4>${'Membership: ' + currentItem.membership + ' - since: ' + currentItem.since}</h4>
      
      </article>`;
    Listing.innerHTML += html;
      });
}
const url = 'data/member.json'

async function getMembers(url) {
    const response = await fetch(url);
    if (response.ok) {
      const membersList = await response.json();
      console.log(membersList);
      construct(membersList.members);
      return membersList.members;
    }
  }

getMembers(url);

// Directory controls

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
