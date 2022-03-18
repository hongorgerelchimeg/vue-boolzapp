
let DateTime = luxon.DateTime;

const app = new Vue(settings =
   {
      el: '#root',
      data: {
         darkMode: false,
         currentChat: false,
         lastMsgTime: '',
         filteredListByName: [],
         searchClientByName: '',
         emptyMsgError: false,
         textMsgPlaceHolder: 'Scrivi un messaggio',
         msgDelay: 2000,
         inputMSG: '',
         replyMessages: [
            'Tu sei forte!',
            "Ci sono persone che si credono speciali. Altre che silenziosamente lo sono.",
            "Ci sono persone che si credono speciali. Altre che silenziosamente lo sono.",
            "Ci sono persone che si credono speciali. Altre che silenziosamente lo sono.",
            "🤩",
            "😤 😠",
            "😡 🤬",
            "🤯",
            "I am 🤖",
            "💩 👻"
         ],
         listaContatti: [
            {
               name: 'Michele',
               avatar: 'avatar_1.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Fabio',
               avatar: 'avatar_2.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Fabio cosa fai?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Niente bello!',
                  status: 'received',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 17:15:22',
                  message: 'Tu invece?!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Samuele',
               avatar: 'avatar_3.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Sam ci sei?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ho bisogno di aiuto! ASAP!',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: "Sono qui! Mi dica!",
                  status: 'received',
                  toggleMenuCheck: false
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: "Ci manca una persone per RAANKEED! ",
                     status: 'sent',
                     toggleMenuCheck: false
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: "Sono libero!",
                     status: 'received',
                     toggleMenuCheck: false
                  },
                  {
                     date: '10/01/2020 18:15:22',
                     message: "Bravoo!",
                     status: 'sent',
                     toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Alessandro B.',
               avatar: 'avatar_4.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 12:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 12:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 12:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Alessandro L.',
               avatar: 'avatar_5.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Claudia',
               avatar: 'avatar_6.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Federico',
               avatar: 'avatar_7.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
                  }
                  ],
            },
            {
               name: 'Davide',
               avatar: 'avatar_8.jpg',
               lastMsg: 'Online',
               visible: true,
               messages: [
                  {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  toggleMenuCheck: false
                  },
                  {
                  date: '10/01/2020 15:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  toggleMenuCheck: false
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
               status: '',
               toggleMenuCheck: '',
               }
            ],
            curruntClient: null,
         },
      
         
      },
      methods: {
         callContactMsg: function(index) {
            this.rightSideObj = this.filteredListByName[index] ;
            this.rightSideObj.curruntClient = index;
         },
         sendMSG: function() {
            index = this.rightSideObj.curruntClient;
            let randN = Math.floor(Math.random() * this.replyMessages.length);
            if (this.inputMSG.trim() != '') {
            currentMsg = this.inputMSG;
            this.filteredListByName[index].lastMsg = 'sta scrivendo...';
            this.filteredListByName[index].messages.push({message: currentMsg, status: 'sent', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), toggleMenuCheck: false});
            this.inputMSG = "";
            this.autoScrollToLast();
            setTimeout(() => {
               this.filteredListByName[index].lastMsg = `Ultimo accesso alle: ${DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss').slice(11, -3)}`;
               if (currentMsg.toLowerCase().includes('ciao')) {
               this.filteredListByName[index].messages.push({message: "Ciao! Sofia", status: 'received', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), toggleMenuCheck: false});
               } else {
               this.filteredListByName[index].messages.push({message: this.replyMessages[randN], status: 'received', date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'), toggleMenuCheck: false});
               }
               this.autoScrollToLast();
            }, this.msgDelay);
            } else {
               this.textMsgPlaceHolder = 'Non può essere vuoto!';
               this.emptyMsgError = true;
               console.log(this.emptyMsgError)
               setTimeout(() => {
                  this.textMsgPlaceHolder = 'Scrivi un messaggio'
                  this.emptyMsgError = false;
               }, 4000);
               
               }
         },
         filterList: function() {
            if (this.searchClientByName == '') this.filteredListByName.push(...this.listaContatti);
            this.filteredListByName = this.listaContatti.filter(client => client.name.toLowerCase().includes(this.searchClientByName.toLowerCase()));
         },
         lastMsgTimeIndicator: function(index) {
            return this.lastMsgTime = this.filteredListByName[index].messages.slice(-1)[0].date.slice(11, -3);
         },
         toggleMenuBtn: function(msg) {
            msg.toggleMenuCheck = !msg.toggleMenuCheck;
         },
         deleteMsg(index){
            console.log(this.rightSideObj.messages.length);
            if(this.rightSideObj.messages.length == 1) {
               let client = this.rightSideObj.curruntClient;
               this.filteredListByName.splice(client,1);
               this.listaContatti.splice(client,1);
               this.callContactMsg(0);
            } else {this.rightSideObj.messages.splice(index,1);}
         },
         currentChatCheck(){
            if (this.inputMSG.trim() == '') {
            this.currentChat = false;
            } else {
            this.currentChat = true;
            }
         },
         darkModeChange() {
           this.darkMode = !this.darkMode;
         },
         autoScrollToLast() {
         const msgArea = this.$el.querySelector(".text-area");
         msgArea.scrollTop = msgArea.scrollHeight;

         }

      },
      beforeUpdate() {
         this.filterList();
         this.currentChatCheck();
      },
      created() {
         this.filterList();
         this.callContactMsg(0);
      },
   }
);