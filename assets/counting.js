const prof = document.querySelector('#icon');

prof.addEventListener('click', function(){
    let x = document.querySelector('.profil');
    let y = document.querySelector('.count');
    let z = document.querySelector('.content');
   // x.style.display = "none";
    if (x.style.display === "block"){ 
        x.style.display = "none";
        y.style.width = "100%";
        z.style.width = "100%";
    }
    else {
        x.style.display = "block";
        y.style.width = "77%";
        z.style.width = "77%";
    }
})
const cek = document.querySelector('input[type="button"]');
const teks = document.getElementById('result');
let ideal=0;
cek.addEventListener('click',function(){
    const select = document.querySelector('select');
    let TB = document.getElementById('TB').value;
    let BB = document.getElementById('BB').value;
    if (select.value === 'default' || TB == 0 || BB == 0){
        alert('Masukkan data dengan lengkap');
        return;
    }
    if(select.value === 'co')
        ideal = (TB-100)-(TB-100)*0.1;
    else if(select.value === 'ce')
        ideal = (TB-100)-(TB-100)*0.15;
    let bmi = BB/(Math.pow((TB/100),2));
    if (bmi < 18.5)
        teks.innerText = "Berat badan ideal: " + ideal + " kg\nBMI: "+ bmi + "\nberat badan tergolong kurang";
    else if (bmi >= 18.5 && bmi <= 25)
        teks.innerText = "Berat badan ideal: " + ideal + " kg\nBMI: "+ bmi + "\nberat badan tergolong normal";
    else if (bmi > 25 && bmi<=27)
        teks.innerText = "Berat badan ideal: " + ideal + " kg\nBMI: "+ bmi + "\nberat badan tergolong berlebih";
    else
        teks.innerText = "Berat badan ideal: " + ideal + " kg\nBMI: "+ bmi + "\nberat badan tergolong obesitas";
    return;
    });