async function fetchRSSFeed(url) {
    const response = await fetch(url);
    const rssText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    return xmlDoc
}
const feed = "https://raw.githubusercontent.com/hexahedron1/rss-feed/refs/heads/main/rss.xml"
console.log(feed)
var rssfeed = document.getElementById("rssfeed")
rssfeed.innerHTML = `<a href=\"${feed}\">RSS feed</a>`
const params = new URLSearchParams(location.search);
var channel = null;
var idx = null
var items = []
fetchRSSFeed(feed).then(xml => {
    console.log(xml)
    channel = xml.documentElement.childNodes[1]
    for (var i = 0; i < channel.childNodes.length; i++) {
        if (channel.childNodes[i].nodeName != "#text") {
            console.log(channel.childNodes[i].nodeName)
        }
    } 
    for (var i = 0; i < channel.childNodes.length; i++) {
        var node = channel.childNodes[i]  
     	if (node.nodeName == "item") {
        	var item = {
	    		title: null,
                html: null,
                pubdate: null
	    	}
            for (var j = 0; j < node.childNodes.length; j++) {
                var tag = node.childNodes[j]
                console.log(tag)
                if (tag.nodeName == "title")
                    item.title = tag.innerHTML
                if (tag.nodeName == "description")
                    item.html = tag.innerHTML
                if (tag.nodeName == "pubDate")
                    item.pubdate = tag.innerHTML
            }  
		    console.log(item)
            items.push(item)
	    }
    }
    if (params.get("p") == null)
        window.location.href = window.location.toString() + "?p="+(items.length-1)
    else {
        idx = Number.parseInt(params.get("p"))
        console.log(idx)
        var title = document.getElementById("title")
        var content = document.getElementById("content")
        var pubdate = document.getElementById("pubdate")
        title.innerHTML = items[idx].title + " (#" + (idx+1)+")"
        content.innerHTML = items[idx].html
        console.log(items[idx].html)
        pubdate.innerHTML = items[idx].pubdate
        document.getElementById("oldestbtn").disabled = idx == 0
        document.getElementById("prevbtn").disabled = idx == 0
        document.getElementById("nextbtn").disabled = idx == items.length-1
        document.getElementById("lastbtn").disabled = idx == items.length-1
}
})
function setIndex(i) {
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("p", i.toString());
        window.location.search = searchParams.toString();
    }
}
function prev() {
    if (idx == 0) return
    setIndex(idx-1)
}
function next() {
    if (idx == items.length-1) return
    setIndex(idx+1)
}
function last() {
    setIndex(items.length-1)
}