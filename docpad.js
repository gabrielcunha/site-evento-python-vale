module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "2º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "30 de maio de 2015",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "CEDEMP",
      address: "Rua Tsunessaburo Makiguti, 157, Floradas de São José",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://even.tc/pug-vale"
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
      //'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      //sponsors: "Patrocinadores",
      partners: "Patrocinadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "9h30",
      },
      {
        name: "Marcel Rodrigues",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/12984/thumb_marcel.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Usando Metaprogramação para Instrumentar Python com Python",
          description: "Esta palestra apresenta os recursos que a linguagem fornece para instrumentação de código, com exemplos de como criar ferramentas de análise e depuração de programas Python.",
          time: "10h00"
        }
      },
      {
        name: "William Fernandes",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/1934/thumb_new_avatar.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Desafios e Vantagens do Trabalho Remoto",
          description: "Em uma palestra não técnica contarei um pouco da minha experiência com trabalho remoto, Home Office, Coworking e como você pode fazer isso dar certo e ser produtivo.",
          time: "10h40"
        }
      },
      {
        name: "Iury Alves",
        photo: "http://i.imgur.com/utwXrgE.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Gerenciando logs sem dor de cabeça!",
          description: "Esta palestra irá mostrar como gerenciar os logs da sua aplicação (django, flask, etc) com uma ferramenta chamada ELK (elasticsearch, logstash e kibana), ferramenta que permite filtrar, agrupar, organizar e exibí-los de uma maneira elegante.",
          time: "11h20"
        }
      },
      {
        name: "Almoço",
        time: "12h00",
      },
      {
        name: "Mauro Assis",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/15042/thumb_photo.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Usando Python como linguagem embarcada em sistemas",
          description: "Python é uma linguagem que se presta muito a construção de scripts. Por isso ela tem sido \"embarcada\" em sistemas especialistas consagrados, em substituição ou junto com ferramentas proprietárias que esses aplicativos já usavam antes.",
          time: "13h00"
        }
      },
      {
        name: "Bernardo Fontes",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/15048/thumb_238223.jpeg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Orientação a Objetos em Python",
          description: "Muito fala-se sobre orientação a objetos, mas boa parte do material que encontramos contém muitas referências de Java e acabamos por misturar um pouco conceitos com restrições do mundo Java em si. Nessa palestra falo sobre conceitos de orientação a objetos e mostro como aplicá-los em Python.",
          time: "13h40"
        }
      },
      {
        name: "Renzo Nuccitelli",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/10623/thumb_speaker-renzo-nuccitelli.png",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Programando a felicidade",
          description: "Bate papo pseudo filosófico sobre mercado de trabalho, startups, lifestyle business e como meu envolvimento com a comunidade Python alterou tudo isso. Trabalhar apenas 2 dias por semana, viajar, ter tempo para projetos pessoais: é possível sem ser rico?",
          time: "14h20"
        }
      },
      {
        name: "Iuri de Silvio",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/13011/thumb_105852.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Deploy do Python: do zero ao escalável",
          description: "Como colocar sua aplicação web em produção? Como servir um usuário? E um milhão? Colocando sua aplicação web em produção de forma rápida e replicável. Boas práticas e ferramentas para escalar sem esforço. Apresentação de arquiteturas básicas para seus servidores, aplicações web, bancos de dados, caches, monitoramento.",
          time: "15h00"
        }
      },
      {
        name: "Enceramento e Happy Hour!",
        time: "16h00",
      },


    ],

    /* List of Sponsors
    sponsors: [
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa-logo.png",
        url: "http://designa.com.br"
      },
      {
        name: "ZNC Sistemas",
        logo: "themes/yellow-swan/img/znc-logo.png",
        url: "http://designa.com.br"
      }
    ],*/

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
      {
        name: "ZNC",
        logo: "themes/yellow-swan/img/znc-logo.png",
        url: "http://znc.com.br/"
      },
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
