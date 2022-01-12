import React, { useRef, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [infoId, setInfoId] = useState();
    const [infoIdDenp, setinfoIdDenp] = useState();
    const [idClinic, setIdClinic] =useState();

    const modalizeRef = useRef(null);



    const especialidades = [
        {
            id: 1,
            nome: 'Fisiotarapeuta',
        },
        {
            id: 2,
            nome: 'Clinico Geral',
        },
        {
            id: 3,
            nome: 'Pediatra',
        },
        {
            id: 4,
            nome: 'Cardiologista',
        },
        {
            id: 5,
            nome: 'Urologista',
        },
        {
            id: 6,
            nome: 'Pneumologista',
        },
        {
            id: 7,
            nome: 'Dentista',
        },
        {
            id: 8,
            nome: 'Ofmologista',
        },

    ]


    const especialistas = [
        {
            id:1,
            tipo:"Fisiotarapeuta",
            nome:"Ugo Marildo",
            horarios:[
                {
                    id:1,
                    hora: "08:19Am 10/01/2022",
                }
            ]

        },
        {
            id:2,
            tipo:"Clinico Geral",
            nome:"Lucas Colto",
            horarios:[
                {
                    id:1,
                    hora: "10:21Am 09/01/2022",
                }
            ]

        },
        {
            id:3,
            tipo:"Pediatra",
            nome:"Larissa Almeida",
            horarios:[
                {
                    id:1,
                    hora: "08:44Am 03/02/2022",
                }
            ]

        },
        {
            id:4,
            tipo:"Cardiologista",
            nome:"Carol Nobrega",
            horarios:[
                {
                    id:1,
                    hora: "14:45Am 10/01/2022",
                }
            ]

        }


    ]

    const listaClinicas = [
        {
            id: 1,
            titulo: 'Hospital Santa Lucia',
            localidade: 'SHLS SHLS 716 Bloco F',
            local: 'Asa Sul',
            urlImg: 'https://i0.wp.com/www.santalucia.com.br/wp-content/uploads/2018/01/Novo_site_fachada_bloco_C_HSL.jpg?fit=760%2C470',
            telefone: '3445-0000',
            textoClinica: 'Atendemos a mais de 20 anos, com os melhores profissionais, pra nos e muito mais do que um simples atendimento e um cuidado com a sua vida!',
            latitude:-15.827827744859448,
            longitude:-47.92992877960072,
            logo: 'https://www.dgbb.com.br/wp-content/uploads/2016/11/0001-scaled-300x60.jpg'
        },
        {
            id: 2,
            titulo: 'Hospital Albert Einstein',
            localidade: 'Setor A Norte Qna 41 Qna 43 Qna 30 Qna',
            local: 'Taguatinga',
            urlImg: 'https://www.microblau.com.br/wp-content/uploads/2018/03/hospital-albert-einstein-disponibiliza-curso-experiencia-do-paciente.jpg',
            telefone: '3963-1000',
            textoClinica: 'Atendemos a mais de 20 anos, com os melhores profissionais, pra nos e muito mais do que um simples atendimento e um cuidado com a sua vida!',
            latitude:-15.827865889424155,
            longitude:-47.9281887355178,
            logo: 'https://s1.static.brasilescola.uol.com.br/be/vestibular/-5965fe1b88f31.png'
        },
        {
            id: 3,
            titulo: 'Hospital Sao Matheus',
            localidade: 'SRES Quadra 02 Area Especial',
            local: 'Cruzeiro Velho',
            urlImg: 'https://scontent-gru2-2.xx.fbcdn.net/v/t31.18172-8/14242389_946392195473011_687093247729715063_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=DBZmslgh9_0AX_tjxou&_nc_oc=AQlb-GGRYZi7ntjHM1w5dmebuNezO8QDFXdXl31G58vHptCiN0pvFh1XqaMWt_9q6gU&_nc_ht=scontent-gru2-2.xx&oh=00_AT8wkTcjwlxyn92Sv-sHq0GXLxNp_ipgVEznEfOkNp0Cnw&oe=61FBBD48',
            telefone: '3339-5521',
            textoClinica: 'Atendemos a mais de 20 anos, com os melhores profissionais, pra nos e muito mais do que um simples atendimento e um cuidado com a sua vida!',
            latitude:-15.792174621271696,
            longitude:-47.94250567377405,
            logo:'https://scontent-gru2-2.xx.fbcdn.net/v/t1.18169-9/14199186_946392418806322_832237258501872906_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Qd2QkKzqK6kAX-UK1ii&_nc_ht=scontent-gru2-2.xx&oh=00_AT_bVap-MJHsrYhDzH9rvdmDdjMJ_PsDPAWWWBjsD2zW9Q&oe=61FC1249'
        },
    ]

    const [listaDeDependentes, setlistaDeDependentes] = useState([
        {
            id: 1,
            nome:'Carlos Alberto',
            select: false,
            historico: [
                {
                    id: 1,
                    data: '05/01/2022',
                    hora: '16:43',
                    medico: 'Dr. Bernardo', 
                    unidade: 'São Fernando - Asa Sul',
                },
                {
                    id: 2,
                    data: '06/02/2022',
                    hora: '20:11',
                    medico: 'Dr. Bernardo',
                    unidade: 'São Fernando - Asa Sul',
                },
                {
                    id: 3,
                    data: '03/03/2022',
                    hora: '04:02',
                    medico: 'Dr. Bernardo',
                    unidade: 'São Fernando - Asa Sul',
                },
                {
                    id: 4,
                    data: '22/03/2022',
                    hora: '19:43',
                    medico: 'Dr. Bernardo',
                    unidade: 'São Fernando - Asa Sul',
                },
                {
                    id: 5,
                    data: '22/03/2022',
                    hora: '19:43',
                    medico: 'Dr. Bernardo',
                    unidade: 'São Fernando - Asa Sul',
                },
            ]
        },
        {
            id: 2,
            nome:'Clara Maria',
            select: false,
            historico: [
                {
                    id: 1,
                    data: '05/01/2022',
                    hora: '16:43',
                    medico: 'Dra. Calina',
                    unidade: 'Hollidays - São Sebastião',
                },
                {
                    id: 2,
                    data: '06/02/2022',
                    hora: '20:11',
                    medico: 'Dra. Calina',
                    unidade: 'Hollidays - São Sebastião',
                },
                {
                    id: 3,
                    data: '03/03/2022',
                    hora: '04:02',
                    medico: 'Dra. Calina',
                    unidade: 'Hollidays - São Sebastião',
                },
                {
                    id: 4,
                    data: '22/03/2022',
                    hora: '19:43',
                    medico: 'Dra. Calina',
                    unidade: 'Hollidays - São Sebastião',
                },
            ]
        },
        {
            id: 3,
            nome:'Julia Pereira',
            
            historico: [
                {
                    id: 1,
                    data: '05/01/2022',
                    hora: '16:43',
                    medico: 'Dr. Adalberto',
                    unidade: 'Lispctor - Lago Sul',
                },
                {
                    id: 2,
                    data: '06/02/2022',
                    hora: '20:11',
                    medico: 'Dr. Adalberto',
                    unidade: 'Lispctor - Lago Sul',
                },
                {
                    id: 3,
                    data: '03/03/2022',
                    hora: '04:02',
                    medico: 'Dr. Adalberto',
                    unidade: 'Lispctor - Lago Sul',
                },
                {
                    id: 4,
                    data: '22/03/2022',
                    hora: '19:43',
                    medico: 'Dr. Adalberto',
                    unidade: 'Lispctor - Lago Sul',
                },
            ]
        },
]);


    const data = {
        listaClinicas,
        listaDeDependentes,
        setlistaDeDependentes,
        infoId,
        setInfoId,
        infoIdDenp,
        setInfoId,
        especialistas,
        especialidades,
        setIdClinic,
        idClinic,
        modalizeRef
        
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;