const app = new Vue({
    el: '#seccion-principal',
    data:{
        mostrar: false,
        mensaje:'',
        resultados:false,
        ask1:'',
        ask2:'',
        ask3:'',
        ask3Array:[],
        ask4:'',
        estado:true,
        cambiar:'Ocultar',
    },
    methods: {
        muestraPregunta(n){
            if(n)
                this.mostrar=true;
            else
                this.mostrar=false;
                this.mensaje=this.mostrar ? '' : 'Gracias por su respuesta';
        },

        muestraResultados(){
            this.resultados = !this.resultados;
        },

        agregar(){
            this.ask3Array.push(this.ask3);
            this.ask3="";
        },

        mostrarResultados(){
            this.estado = !this.estado;
            if(this.estado){
                this.cambiar='Ocultar';
            }else{
                this.cambiar='Mostrar';
            }
        },
    },
});