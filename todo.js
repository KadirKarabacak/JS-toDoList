/* ------------------ JS TO DO LIST HOMEWORK ------------------------ */

/* 
Listeye boş karakter eklenemiyor. (null)
Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor. ("")
Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, 
element silmeyi sağlayan bir fonksiyon, 
yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir.
Bunu sağlayan Bootstrap Toast bildirimdir. 
Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
Önce ana fonksiyonlar için uğraşın. 
Yapıldı, toast bildirim bunlar biraz daha işin artistliği.
Öncelikli amacını sağlıyor olması lazım.
Yazdığınız js dosyasını projenize eklemeyi unutmayın. 
*/

// Ana Fonksiyonu Oluşturma
closeItemAdd();
function addItem() {
    var ul = document.getElementById("list");
    var task = document.getElementById("task");
    var li = document.createElement("li");
    li.setAttribute('id', task.value);
    li.appendChild(document.createTextNode(task.value));
    li.classList.add('inputTask'); // css özelliği ekleme
    if (task.value == "" || null || !task.value.trim()) {  //!task.value.trim() { Boş Bilgi Girmeyi Engeller}
        toasterFail();
        return;
    }
    else {
        ul.appendChild(li);
        task.value = "" // Clear After input
        toaster();
        closeItemAdd();
    }
    saveLocalItems();
}

// Toast Success
function toaster() {
    var snack = document.getElementById("snackbar");
    snack.className = "show";
    setTimeout(function () { snack.className = snack.className.replace("show", ""); }, 3000)
}

// Toast Fail
function toasterFail() {
    var snack = document.getElementById("snackbar2");
    snack.className = "show";
    setTimeout(function () { snack.className = snack.className.replace("show", ""); }, 3000)
}

// Kapatma Bütonları Ekleme
function closeItemAdd() {
    var myNodeList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodeList.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
        hidden();
    }
}

// Bir kapatma butonuna tıkladığında o itemi gizleme
function hidden() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Listedeki bir iteme tıklandığında "Tik" işareti ekle
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Enter eventi --
$("#task").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#liveToastBtn").click();
    }
});

// LOCAL STORAGE
function saveLocalItems() {
    let items;
    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
        items.push(items);
        localStorage.setItem("items", JSON.stringify(items));
    }
}