// הגדרה ואיפוס של count
HtmlElement.prototype.count = 1;

// הגדרה של הקונסטרקטור עם id אוטומטי
function HtmlElement(elementType,textContent) {
    this.elementType=elementType
    this.textContent=textContent
    this.id ='elem'+ (HtmlElement.prototype.count++)
}

HtmlElement.prototype.render=function(){
    return`<${this.elementType}>${this.textContent}<${this.elementType}/>`
}

function ImageElement(src,alt) {
    HtmlElement.call(this,'img',this.alt)
    this.src=src
    this.alt=alt
}
ImageElement.prototype=Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor=ImageElement

ImageElement.prototype.render=function(){
    return `<img src="${this.src}" alt="${this.alt}">`
}

function SelectElement(options){
    HtmlElement.call(this,'select',options)
    
}
SelectElement.prototype=Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor=ImageElement

SelectElement.prototype.render=function(){
    opt=``
    this.textContent.forEach(element => {
        opt+=`<option value="${element}">${element}</option>`
    });
    return`<select>${opt}</select>`
}

function createElementz() {
    let t=document.getElementById("elementType").value
    let c=document.getElementById("content1").value
    let element = new HtmlElement(t,c);
    document.body.innerHTML+=element.render()
}

function createPng() {
    let s=document.getElementById("source").value
    let c=document.getElementById("content2").value
    let element = new ImageElement(s,c);
    document.body.innerHTML+=element.render()
}

function createSelect() {
    let list=(document.getElementById("options").value).split(",")
    console.log(list)
    debugger
    let element = new SelectElement(list);
    document.body.innerHTML+=element.render()
}

