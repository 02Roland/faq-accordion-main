let plus = document.querySelectorAll(".plus")
let minus = document.querySelectorAll(".minus")
let tableau1 = Array.from(plus)
let tableau2 = Array.from(minus)

tableau1.forEach((plus)=>{
    plus.onclick = function(e){
        e.currentTarget.style.display = 'none'
        e.currentTarget.nextElementSibling.style.display = 'block'
        e.currentTarget.parentElement.nextElementSibling.style.display = 'block'  
    }
})
tableau2.forEach((minus)=>{
    minus.onclick = function(e){
        e.currentTarget.style.display = 'none'
        e.currentTarget.previousElementSibling.style.display = 'block'
        e.currentTarget.parentElement.nextElementSibling.style.display = 'none'
    }
})
