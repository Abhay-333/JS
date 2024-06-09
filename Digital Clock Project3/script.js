const clock = document.querySelector('#clock')

// setInterval(function(){
// let localDate = new Date()
// clock.textContent = localDate.toLocaleTimeString()
// },1000)

setInterval(()=>{
    let localDate = new Date()
    clock.textContent = localDate.toLocaleTimeString()
},1000)
