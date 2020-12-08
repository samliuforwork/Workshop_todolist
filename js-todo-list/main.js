// TO DO




window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addBtn').addEventListener('click', function() {
        document.querySelector('ul').insertAdjacentHTML('afterend', addlist())
    })

    // 代辦事項完成
    document.querySelector('li').addEventListener('click', function() {
        document.querySelector('li').classList.toggle('checked')
    })

    // 刪除計畫
    document.querySelector('.close').addEventListener('click',
    function () {
        const removeli = document.querySelector('li')
            if (removeli){
                removeli.remove()
            }
    })

    var removeli = document.getElementsByClassName('close');
    var i;
    for (i = 0 ; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            removeli.remove()
        }
    }

function addlist() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("請勿填寫空白");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("input").value = ''
    
    const container = document.querySelector('li')
    const xx = container.createElement('span')
    xx.classList.add('close')
    xx.textContent = 'X'
    li.append(xx)
}
})