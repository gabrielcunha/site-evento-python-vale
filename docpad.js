module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "3º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "02 de setembro de 2017",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "Sede Brasil 317",
      address: "Av. Comendador Vicente de Paulo Penido, 454, Jd. Aquarius",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://www.sympla.com.br/3-pugvale---grupo-de-usuarios-de-python-do-vale-do-paraiba__173342"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/PUGVale/pug-abril"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://pythonvale.com.br/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Realização",
      partners: "Patrocinadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento e Apresentação",
        time: "9h00",
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "09h20"
        }
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "10h00"
        }
      },
      {
        name: "Coffee Break",
        time: "10h40",
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "11h10"
        }
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "11h50"
        }
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "12h30"
        }
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "12h45"
        }
      }
    ],

    //List of Sponsors
    sponsors: [
      {
        name: "Brasil 317",
        logo: "themes/yellow-swan/img/brasil317.png",
        url: "http://brasil317.com.br"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa.png",
        url: "http://designa.com.br"
      },
      {
        name: "Programe em Python",
        logo: "themes/yellow-swan/img/programeempython.png",
        url: "http://programeempython.com.br"
      },
      // {
      //   name: "ZNC",
      //   logo: "themes/yellow-swan/img/znc-logo.png",
      //   url: "http://znc.com.br/"
      // },
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
