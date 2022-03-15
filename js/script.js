const app = new Vue(settings =
   {
      el: '#root',
      data: {
         listaContatti: [
            {
               name: 'Michele',
               avatar: 'avatar_1.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Fabio',
               avatar: 'avatar_2.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Samuele',
               avatar: 'avatar_3.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Alessandro B.',
               avatar: 'avatar_4.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Alessandro L.',
               avatar: 'avatar_5.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Claudia',
               avatar: 'avatar_6.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Federico',
               avatar: 'avatar_7.jpg',
               lastMsg: '12:00'
            },
            {
               name: 'Davide',
               avatar: 'avatar_8.jpg',
               lastMsg: '12:00'
            }

         ],
         rightSideObj: {
            name: 'Michele',
            avatar: 'avatar_1.jpg',
            lastMsg: '12:00'
         },
         saluto: '',
         
      },
      methods: {
         callContactMsg: function (index) {
            return this.rightSideObj = this.listaContatti[index] ;
         },


      }
   }
);

 