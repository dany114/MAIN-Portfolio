let i = 0;
let a = 0;
const h1 = 'I am Petcov Daniel, a FrontEnd-Developer. \n Nice to meet you!';
const h2 = 'I am 18 years old, from Romanian. My passion is Web Development and coding on overall. By the way I am a JDM fan too. ';
const speed__h1 = 80; /* The speed duration of the h1 type-writer */ 
const speed__h2 = 40; /* The speed duration of the h2 type-writer */


// the type-writer effect function
// h1 typing effect function
function typeWriter(){
    if (i < h1.length){
        document.getElementById('type-writerh1').innerHTML += h1.charAt(i);
        i++;
        setTimeout(typeWriter, speed__h1);
    } else {
        typeWriterh2();
    }
}

// h2 typing effect function
function typeWriterh2(){
    if (a < h2.length){
        document.getElementById('type-writerh2').innerHTML += h2.charAt(a);
        a++;
        setTimeout(typeWriterh2, speed__h2);
    } else {
        document.getElementById('type-writerh2').innerHTML +=  '<i class="fa-solid fa-car-side"></i>'
    }
}


window.onload = typeWriter;