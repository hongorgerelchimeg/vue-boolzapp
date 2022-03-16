
let DateTime = luxon.DateTime;

const app = new Vue(settings =
   {
      el: '#root',
      data: {
         lastMsgTime: '',
         filteredListByName: [],
         searchClientByName: '',
         emptyMsgError: false,
         textMsgPlaceHolder: 'Scrivi un messaggio',
         msgDelay: 1000,
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
                  date: '10/01/2020 15:50:22',
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
                  date: '10/01/2020 17:15:22',
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
                     date: '10/01/2020 18:15:22',
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
                  date: '10/01/2020 12:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 12:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                  },
                  {
                  date: '10/01/2020 12:15:22',
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
                  date: '10/01/2020 15:15:22',
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
            if (this.inputMSG.trim() != '') {
            currentMsg = this.inputMSG;
            this.listaContatti[index].messages.push({message: currentMsg, status: 'sent', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')});
            this.inputMSG = "";
            setTimeout(() => {
               if (currentMsg.toLowerCase().includes('ciao')) {
               this.listaContatti[index].messages.push({message: "Ciao! Sofia", status: 'received', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')});
               } else {
               this.listaContatti[index].messages.push({message: "Okay!", status: 'received', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')});
               }
            }, this.msgDelay);
            } else {
               this.textMsgPlaceHolder = 'Non può essere vuoto!';
               this.emptyMsgError = true;
               console.log(this.emptyMsgError)
               setTimeout(() => {
                  this.textMsgPlaceHolder = 'Scrivi un messaggio'
                  this.emptyMsgError = false;
            }, 3000);
               
            }
         },
         filterList: function() {
            if (this.searchClientByName == '') {
               this.filteredListByName.push(...this.listaContatti);
            }
            this.filteredListByName = this.listaContatti.filter(client => client.name.toLowerCase().includes(this.searchClientByName.toLowerCase()));
         },
         lastMsgTimeIndicator: function(index) {
            // console.log(this.listaContatti[index].messages.slice(-1)[0].date);
            return this.lastMsgTime = this.listaContatti[index].messages.slice(-1)[0].date.slice(11, -3);
         }
      


      },
      beforeUpdate() {
         this.filterList();

      },
      created() {
         this.filterList();
         this.callContactMsg(0);
      },
   }
);

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina) 
// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 