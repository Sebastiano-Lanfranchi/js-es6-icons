const icons = [
  {
    name: 'cat',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'crow',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'dog',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'dove',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'dragon',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'horse',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'hippo',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'fish',
    prefisso: 'fas fa-',
    tipo: 'animal',
    family: ''
  },
  {
    name: 'carrot',
    prefisso: 'fas fa-',
    tipo: 'vegetable',
    family: ''
  },
  {
    name: 'carrot',
    prefisso: 'fas fa-',
    tipo: 'vegetable',
    family: ''
  },
  {
    name: 'apple-alt',
    prefisso: 'fas fa-',
    tipo: 'vegetable',
    family: ''
  },
  {
    name: 'lemon',
    prefisso: 'fas fa-',
    tipo: 'vegetable',
    family: ''
  },
  {
    name: 'pepper-hot',
    prefisso: 'fas fa-',
    tipo: 'vegetable',
    family: ''
  },
  {
    name: 'user-astronaut',
    prefisso: 'fas fa-',
    tipo: 'user',
    family: ''
  },
  {
    name: 'user-graduate',
    prefisso: 'fas fa-',
    tipo: 'user',
    family: ''
  },
  {
    name: 'user-secret',
    prefisso: 'fas fa-',
    tipo: 'user',
    family: ''
  }
];
// -------------------------------Milestone 1--------------------------------------
let colore = '';
const appInsiemeIcone = document.getElementById('insieme-icone');
const coloriIcone = ['blue', 'yelloh', 'purple'];

icons.forEach((element) => {
if(element.tipo === 'animal'){
  colore = coloriIcone[0]
  appInsiemeIcone.innerHTML += `
  <div class="icone">
    <i class="${element.prefisso}${element.name} fa-3x" style= color:${colore} ></i>
    </br>
    ${element.name}
  </div>
  `
}
if(element.tipo=== 'vegetable'){
 colore = coloriIcone[1]
 appInsiemeIcone.innerHTML += `
 <div class="icone">
   <i class="${element.prefisso}${element.name} fa-3x" style= color:${colore} ></i>
   </br>
   ${element.name}
 </div>
 `
}
if(element.tipo=== 'user'){
     colore = coloriIcone[2]
     appInsiemeIcone.innerHTML += `
     <div class="icone">
       <i class="${element.prefisso}${element.name} fa-3x" style= color:${colore} ></i>
       </br>
       ${element.name}
     </div>
     `
   }
 });


// -------------------------------Milestone 2--------------------------------------
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.



   // const appInsiemeIcone = document.getElementById('insieme-icone');
   // let colore = '';
   //
   //
   // icons.forEach((element) => {
   //   if (element.tipo === 'animal') {
   //     colore = 'blue'
   //     appInsiemeIcone.innerHTML += `
   //     <div class="icone">
   //       <i class="${element.prefisso}${element.name} fa-3x" style="color:${colore}"></i>
   //       </br>
   //       ${element.name}
   //     </div>
   //     `
   //   }if(element.tipo === 'vegetable'){
   //     colore = 'yellow'
   //     appInsiemeIcone.innerHTML += `
   //     <div class="icone">
   //       <i class="${element.prefisso}${element.name} fa-3x" style="color:${colore}"></i>
   //       </br>
   //       ${element.name}
   //     </div>
   //     `
   //   }if(element.tipo === 'user'){
   //     colore='purple'
   //     appInsiemeIcone.innerHTML += `
   //     <div class="icone">
   //       <i class="${element.prefisso}${element.name} fa-3x" style="color:${colore}"></i>
   //       </br>
   //       ${element.name}
   //     </div>
   //     `
   //   }
   // });

   const boxFiltered = document.getElementById('box-filtered');
   const tipoSelect = document.getElementsByClassName('tipo-select')[0];

   const tipoList = [];
   icons.forEach((element) => {
     if(!tipoList.includes(element.tipo)) {
       tipoList.push(element.tipo);
     }
   })

   tipoList.forEach((element) => {  // element è la stringa color
     tipoSelect.innerHTML += `
       <option value="${element}">${element}</option>
     `
   });
