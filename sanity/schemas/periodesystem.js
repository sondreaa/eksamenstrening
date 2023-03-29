export default {
    name:'periodesystem',
    type:'document',
    title:'Periodesystemet',
    fields: [
        {name:'navn',
        type:'string',
        title:'Norsk navn'
        },
        {name:'engnavn',
        type:'string',
        title:'Engelsk navn'
        },
        {name:'symbol',
        type:'string',
        title:'Symbol'
        },
        {name:'atomnummer',
        type:'number',
        title:'Atomnummer'
        },
        {name:'gruppe',
        type:'number',
        title:'Gruppe'
        },
        {name:'periode',
        type:'number',
        title:'Periode'
        },
        {name:'vekt',
        type:'number',
        title:'Atomvekt'
        },
        {name:'metal',
        type:'string',
        title:'Metall? (metal / half / non)'
        },
        {name:'tilstand25',
        type:'string',
        title:'Tilstand ved 25°C (sol / liq / gas)'
        },
        {name:'keywords',
        type:'string',
        title:'Nøkkelord/egenskaper'
        },
    ]

}