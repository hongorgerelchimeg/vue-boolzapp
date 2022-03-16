

const app = new Vue(settings =
   {
      el: '#root',
      data: {
         inputMSG: '',
         listaContatti: [
            {
               name: 'Michele',
               avatar: 'avatar_1.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Fabio',
               avatar: 'avatar_2.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Fabio cosa fai?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Niente bello!',
                  status: 'received'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tu invece?!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Samuele',
               avatar: 'avatar_3.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Sam ci sei?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ho bisogno di aiuto! ASAP!',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: "Sono qui! Mi dica!",
                  status: 'received'
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: "Ci manca una persone per RAANKEED! ",
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: "Sono libero!",
                     status: 'received'
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: "Bravoo!",
                     status: 'sent'
                  }
                  ],
            },
            {
               name: 'Alessandro B.',
               avatar: 'avatar_4.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Alessandro L.',
               avatar: 'avatar_5.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Claudia',
               avatar: 'avatar_6.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Federico',
               avatar: 'avatar_7.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            },
            {
               name: 'Davide',
               avatar: 'avatar_8.jpg',
               lastMsg: '12:00',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                  }
                  ],
            }

         ],
         rightSideObj: {
            name: '',
            avatar: '',
            lastMsg: '',
            visible: true,
            messages: [
               {
               date: '',
               message: '',
               status: ''
               }
            ],
            curruntClient: null,
         },
         saluto: '',
         
      },
      methods: {
         callContactMsg: function(index) {
            this.rightSideObj = this.listaContatti[index] ;
            this.rightSideObj.curruntClient = index;
         },
         sendMSG: function() {
            index = this.rightSideObj.curruntClient;
            console.log(index);
            curruntMsg = this.inputMSG;
            this.listaContatti[index].messages.push({message: curruntMsg, status: 'sent', date: new Date()});
         }
      


      },

      created() {
         
         this.callContactMsg(0);
      },
   }
);

 