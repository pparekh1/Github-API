function getFollower() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("url");


  let main = document.querySelector("main");
  console.log("fetch some JSON data");
  fetch(c)
    .then(response => response.json())
    .then(data => {

      data.forEach(item => {
        let  list = document.createElement("li");

        list.textContent = item.login;
        main.appendChild(list);
      });

    });
};
