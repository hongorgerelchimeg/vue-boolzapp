const app = new Vue(settings =
   {
      el: '#root',
      data: {
         name: '',
         saluto: '',
         
      },
      methods: {
         saluta: function () {
            this.saluto = 'Ciao' + " " + this.name;
         },


      }
   }
);

 