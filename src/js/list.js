	var pagecount = 1;

	var xhr = new XMLHttpRequest;
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {

	        var res = JSON.parse(xhr.responseText);
	        // console.log(xhr.responseText)
	        var li = document.createElement('li');
	        li.innerHTML = res.map(function(item) {

	            return `<a href="details.html"><img src=".${item.src}">
                        <p>${item.name}</p>
                        <p><span class="price">￥${item.price}</span><span class="count"><i class="fa fa-star-o"></i>1234</span></p>
                    </a>
`

	        }).join('');
	        var ul = document.querySelector('#main_ul')

	        ul.appendChild(li)
	        pagecount++;
	    }
	}
	xhr.open('get', 'http://localhost/project/src/php/goodlist.php?pageNo=' + pagecount, true);
	xhr.send();

	// 滚动预加载
	window.onscroll = function() {
	    if (window.scrollY >= 1000 - window.innerHeight) {

	        xhr.open('get', 'http://localhost/project/src/php/goodlist.php?pageNo=' + pagecount, true);
	        xhr.send();
	    };

	}