let callbody = document.querySelector(".clock-father")

let hourcreate = document.createElement("p")
let minutecreate = document.createElement("p")
let secondcreate = document.createElement("p")
let hourtext = document.createElement("h6")
hourtext.textContent = "Hour"
hourtext.style.color = "white"
hourtext.style.position = "absolute"
hourtext.style.left = "435px"
hourtext.style.top = "440px"
hourtext.style.fontSize = "22px"
hourtext.style.fontFamily = "inter Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"

let minutetext = document.createElement("h6")

minutetext.textContent = "Minute"
minutetext.style.color = "white"
minutetext.style.position = "absolute"
minutetext.style.left = "725px"
minutetext.style.top = "440px"
minutetext.style.fontSize = "22px"
minutetext.style.fontFamily = "inter Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"

let secondtext = document.createElement("h6")

secondtext.textContent = "Second"
secondtext.style.color = "white"
secondtext.style.position = "absolute"
secondtext.style.left = "1025px"
secondtext.style.top = "440px"
secondtext.style.fontSize = "22px"
secondtext.style.fontFamily = "inter Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"

callbody.append(secondtext)
callbody.append(hourtext)
callbody.append(minutetext)
callbody.append(hourcreate)
callbody.append(minutecreate)
callbody.append(secondcreate)


function clock() {
    let date = new Date()
    let hour = String( date.getHours()).padStart(2, "0")
    let minute = String( date.getMinutes()).padStart(2, "0")
    let second = String( date.getSeconds()).padStart(2, "0")
    
    hourcreate.textContent = hour
    minutecreate.textContent = minute
    secondcreate.textContent = second
}

setInterval(clock,1000)
clock()

