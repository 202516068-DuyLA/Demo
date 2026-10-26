var ele = document.querySelector('div');
for(var j=0;j<ele.children.length;j++) {
    let btn = ele.children[j];
    btn.onclick = function() {
        console.log(j);
        
    }
}
