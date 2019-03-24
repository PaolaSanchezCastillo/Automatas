 class muertos {
     constructor( gramatica, noTerminales, alfabeto) {
         this.gramatica = gramatica;
         this.noTerminales = noTerminales;
         this.alfabeto = alfabeto;
         this.noTerminalesF = new Array();
         this.gramaticaF = new Array();
         this.iniciacion();
     }

     iniciacion() {//Mediante el alfabeto que se ingreso busca en la gramatica todo aquel simbolo que no se encuentre en l alfabeto,para ser eliminado despues
         var nTerUsados = new Array();
         var i = 0;
         for (var Aux in this.alfabeto) {
             nTerUsados[i] = this.alfabeto[Aux];
             i = i + 1;
         }
         var nombres = Object.keys(this.gramatica);
         for (var Aux2 in this.gramatica) {
             this.gramaticaF[Aux2] = [];
             for (var Aux3 in this.gramatica[Aux2]) {
                 for (var Aux4 in this.alfabeto) {
                     if (this.gramatica[Aux2][Aux3] == this.alfabeto[Aux4]) {
                         this.gramaticaF[Aux2].push(this.gramatica[Aux2][Aux3]);
                     }
                 }
             }
             if (this.gramaticaF[Aux2].length == 0) {
                 delete this.gramaticaF[Aux2];
             }
         }
         var nombres2 = Object.keys(this.gramaticaF);
         temp = nombres[0];
         var prueba = this.gramaticaF[temp];
         for (var Aux in this.gramaticaF) {
             nTerUsados.push(Aux);
         }
         var contador = 0;
         while (contador == 0) {
             contador = 1;
             var encontrado = 0;
             var otroCont = 0;
             var nombres2 = Object.keys(this.gramaticaF);
             for (var Aux in this.gramatica) {
                 for (var Aux2 in this.gramatica[Aux]) {
                     var arrSC = this.gramatica[Aux][Aux2].split("");
                     for (var Aux3 in arrSC) {
                         otroCont = 0;
                         encontrado = 0;
                         for (var Aux4 in nTerUsados) {
                             if (arrSC[Aux3] == nTerUsados[Aux4]) {
                                 encontrado = 1;
                             }
                             if (encontrado == 1) {
                                 break;
                             }
                         }
                         if (encontrado == 0) {
                             break;
                         }
                         otroCont = 1;
                     }
                     if (otroCont == 1) {
                         if (nombres2.includes(Aux)) {
                             var n = this.gramaticaF[Aux].includes(this.gramatica[Aux][Aux2]);
                             n = !n;
                             if (n) {
                                 this.gramaticaF[Aux].push(this.gramatica[Aux][Aux2]);
                             }
                         } else {
                             this.gramaticaF[Aux] = [];
                             this.gramaticaF[Aux].push(this.gramatica[Aux][Aux2]);
                             nTerUsados.push(Aux);
                             contador = 0;
                         }
                     }
                 }
             }
         }
         this.noTerminalesF = Object.keys(this.gramaticaF);
         document.write("<br/>NT:  " + this.noTerminalesF.join("|"));
         document.write("<br/>Gramatica ");

         for (var j in this.noTerminalesF) {
             document.write("<br/>"+this.noTerminalesF[j] + " ⇨ " + this.gramaticaF[this.noTerminalesF[j]].join("|"));
         }
     }
 }
