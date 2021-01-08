// const wrap= document.querySelector("#wrapper");
// const wmf=document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);
// console.log(wmf);
// var books=document.querySelector('#book-list li .name');
// console.log(books);
// var books=document.querySelectorAll('#book-list li .name');
// console.log(books);
//Array.from(books).forEach(function(book)
//{
    // console.log(book.textContent);
    /*
    Name of the Wind
    index.js:11 The Wise Man's Fear
    index.js:11 Kafka on the Shore
    index.js:11 The Master and the Margarita */
    // book.textContent +="(book-title)";
    /*
    Name of the Wind(book-title)
    The Wise Man's Fear(book-title)
    Kafka on the Shore(book-title)
    The Master and the Margarita(book-title) */
//});
//const booklist=document.querySelector('#book-list');
/*------------------------------------------------------------- */
// console.log(booklist.innerHTML);

/*
	<h2 class="title">Books to Read</h2>
	    	<ul>
	    		<li>
	    			<span class="name">Name of the Wind(book-title)</span>
	    			<span class="delete" id="myBtn">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Wise Man's Fear(book-title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">Kafka on the Shore(book-title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Master and the Margarita(book-title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    	</ul>
	     */

/*------------------------------------------------------------- */

// booklist.innerHTML='<h2>Books and more books...</h2>';
// console.log(booklist);
/*
<div id="book-list">
<h2>Books and more books...</h2>
</div> 
*/

/*------------------------------------------------------------- */

// booklist.innerHTML+='<h2>This is how you add HTML</h2>'
// console.log(booklist);
/*
<div id="book-list">
<h2>Books and more books...</h2>
<h2>This is how you add HTML</h2>
</div> 
*/

/*------------------------------------------------------------- */

// const banner =document.querySelector('#page-banner');
// console.log('#page-banner node type is : ', banner.nodeType);
/*------------------------------------------------------------- */
//#page-banner node type is :  1
// console.log('#page-banner node name is : ',banner.nodeName);
/*------------------------------------------------------------- */
//#page-banner node name is :  DIV
// console.log('#page-banner has child nodes',banner.hasChildNodes());
/*------------------------------------------------------------- */
//#page-banner has child nodes true

// const clonedBanner=banner.cloneNode(true);
// console.log(clonedBanner);
/*
<div id="page-banner">
	<h1 class="title">Bookorama</h1>
    <p>Books for Ninjas</p>
    <form id="search-books">
        <input type="text" placeholder="Search books...">
    </form>
</div> 
*/
/*------------------------------------------------------------- */
// const clonedBanner=banner.cloneNode(false);
// console.log(clonedBanner);
/*
Uncaught SyntaxError: 
Identifier 'clonedBanner' has 
already been declared 
*/
/*------------------------------------------------------------- */
// const booklist=document.querySelector('#book-list');
// console.log("the parent node is : " ,booklist.parentNode);
/*
<div id="wrapper">
	    <header>
	    	<div id="page-banner">
	    		<h1 class="title">Bookorama</h1>
          <p>Books for Ninjas</p>
          <form id="search-books">
            <input type="text" placeholder="Search books...">
          </form>
	    	</div>
	    </header>
	    <div id="book-list">
	    	<h2 class="title">Books to Read</h2>
	    	<ul>
	    		<li>
	    			<span class="name">Name of the Wind</span>
	    			<span class="delete" id="myBtn">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Wise Man's Fear</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">Kafka on the Shore</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Master and the Margarita</span>
	    			<span class="delete">delete</span>
	    		</li>
	    	</ul>
	    </div>
	    <form id="add-book">
	    	<input type="text" placeholder="Add a book...">
	    	<button>Add</button>
	    </form>
    </div> */
/*------------------------------------------------------------- */
// console.log("the parent element is:  ", booklist.parentElement.parentElement);
/*
<body>
  	<div id="wrapper">
	    <header>
	    	<div id="page-banner">
	    		<h1 class="title">Bookorama</h1>
          <p>Books for Ninjas</p>
          <form id="search-books">
            <input type="text" placeholder="Search books...">
          </form>
	    	</div>
	    </header>
	    <div id="book-list">
	    	<h2 class="title">Books to Read</h2>
	    	<ul>
	    		<li>
	    			<span class="name">Name of the Wind</span>
	    			<span class="delete" id="myBtn">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Wise Man's Fear</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">Kafka on the Shore</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Master and the Margarita</span>
	    			<span class="delete">delete</span>
	    		</li>
	    	</ul>
	    </div>
	    <form id="add-book">
	    	<input type="text" placeholder="Add a book...">
	    	<button>Add</button>
	    </form>

    </div>
    <script src="/index.js"></script>
<!-- Code injected by live-server -->
<script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body> */
/*------------------------------------------------------------- */
// console.log(booklist.childNodes);
/*
NodeList(5) [text, h2.title, text, ul, text]
0: text
1: h2.title
2: text
3: ul
4: text
length: 5
__proto__: NodeList */
/*------------------------------------------------------------- */
// console.log(booklist.children);
/*
HTMLCollection(2) [h2.title, ul]
0: h2.title
1: ul
length: 2
__proto__: HTMLCollection */
/*------------------------------------------------------------- */
// const booklist=document.querySelector('#book-list');
// console.log('book-list next sibling is : ',booklist.nextSibling );
//book-list next sibling is :  #text
/*------------------------------------------------------------- */
// console.log('book-list next sibling is : ',booklist.nextElementSibling );
/*
book-list next sibling is :  <form id=​"add-book">​…​</form>​
<form id="add-book">
	    	<input type="text" placeholder="Add a book...">
	    	<button>Add</button>
</form> */
/*------------------------------------------------------------- */
// console.log('book-list previous sibling is : ',booklist.previousSibling);
/*
book-list previous sibling is :  #text */
/*------------------------------------------------------------- */
// console.log('book-list next pervious is : ',booklist.previousElementSibling)
/*
book-list next pervious is :  <header>
	    	<div id="page-banner">
	    		<h1 class="title">Bookorama</h1>
          <p>Books for Ninjas</p>
          <form id="search-books">
            <input type="text" placeholder="Search books...">
          </form>
	    	</div>
	    </header>
 */
/*------------------------------------------------------------- */

// booklist.previousElementSibling.querySelector("p").innerHTML+='<br>Too cool for everyone else !';
/*------------------------------------------------------------- */

//DELETE ITEM

// var btns=document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn)
// {
//     btn.addEventListener('click',function(e)
//     {
//         const li=e.target.parentElement;
//         li.parentNode.removeChild(li);

//     })
// })

/*------------------------------------------------------------- */
// const link=document.querySelector('#page-banner a');
// link.addEventListener('click',function(e)
// {
//     e.preventDefault();
//     console.log('navigation to',e.target.textContent,'was prevented')  ;
// })
/*navvigation to Google was prevented  */

/*------------------------------------------------------------- */
// const list=document.querySelector('#book-list ul');
//DELETE BOOK ELEMENT
document.addEventListener('DOMContentLoaded',function()
{
	
 const liste =document.querySelectorAll('#book-list ul');
 Array.from(liste).forEach(function(liste)
 {
     liste.addEventListener('click',function(e)
     {
         if(e.target.className=="delete")
                  {
            const li=e.target.parentElement;
             liste.removeChild(li);

       }
     })
     })
 
/*------------------------------------------------------------- */

Array.from(liste).forEach(function(liste)
{

	const addForm=document.forms["add-book"];
	
	addForm.addEventListener("submit",function(e)
	{
		e.preventDefault();
		const value=addForm.querySelector('input[type="text"]').value;
// //     //CREATE ELEMENT
     let li=document.createElement('li');
     let bookName=document.createElement('span');
     let deleteBtn=document.createElement('span');
 //     //APPEND TO DOCUMENT
 	li.appendChild(bookName);
 	li.appendChild(deleteBtn);
 	liste.appendChild(li);
// 	//add classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');
 	//add content 
	 deleteBtn.textContent="delete";
	 bookName.textContent=value;
 	bookName.classList.add('name');
	deleteBtn.classList.add('delete');
 

	}
	)
})


//hide books
const hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(hideBox)
{
	if(hideBox.checked!==true) 
	{
		for(let i =0;i<liste.length;i++)
		{
			liste[i].style.display="initial";
			console.log(1);
		}
	}
	else 
	{
		for(let i =0;i<liste.length;i++)
		{
			liste[i].style.display="contents";
			
		}
	
	
	}
}
)

//filter books
const searchBar=document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e)
{
	const term=e.target.value.toLowerCase();
	const books=document.getElementsByTagName('li');
	
	Array.from(books).forEach(function(book)
	{
		const title=book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term)!=-1)
		{
			book.style.display="block";
		}
		else
		{
			book.style.display="none";
		}
	})
})

//tabbed content
const tabs=document.querySelector('.tabs');
const panels=document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e)
{
	if(e.target.tagName=='LI')
	{
		const targetPanel=document.querySelector(e.target.dataset.target);
		panels.forEach(function(panel)
		{
			if(panel==targetPanel)
			{
				panel.classList.add('active');
			}
			else
			{
				panel.classList.remove('active');
			}
		})
	}
})

})
