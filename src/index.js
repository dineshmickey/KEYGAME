import "./styles.css";

var keydown = undefined;
var keyup = undefined;
var clicked_keys = {};

if (typeof keydown === "undefined") {
  keydown = document.addEventListener("keydown", function(event) {
    console.log(event);
    if (!event.repeat) {
      clicked_keys[event.keyCode] = { code: event.charCode, key: event.key };
      update_dom();
    }
  });
}

if (typeof keyup === "undefined") {
  keyup = document.addEventListener("keyup", function(event) {
    event.preventDefault();
    delete clicked_keys[event.keyCode];
    delete_dom();
  });
}

function delete_dom() {
  const myNode = document.getElementById("app");
  myNode.innerHTML = "";
}

function update_dom() {
  console.log(JSON.stringify(clicked_keys));

  let keys = Object.getOwnPropertyNames(clicked_keys);
  for (let index = 0; index < keys.length; index++) {
    const element = clicked_keys[keys[index]];
    var para = document.createElement("p");
    var node = document.createTextNode(
      `${clicked_keys[keys[index]].key}- ${keys[index]}`
    );
    para.appendChild(node);
    var e = document.getElementById("app");
    e.appendChild(para);
  }
}
