const imageLinks = [
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617119560/Art/Aranea-and-Porrim_a45bvy.gif',
        type: "tall"
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617119544/Art/AraneaKankriSufferer_ajffkd.png',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115377/Art/AraneaSerketHomestuck_2Style_trtxbe.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115319/Art/Darius-runningLeap_rnnkyt.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115318/Art/Darius-running_tct19k.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115345/Art/Enchantress_bbrej0.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115396/Art/Evermore-_g01za9.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115353/Art/Flora_zjslrv.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115240/Art/Karuna-Head-turn_fvdo3l.gif',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115125/Art/KarunaBackflip_y8et9g.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115206/Art/KarunaShocked_euazl9.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115371/Art/Karuna_Art_tfefmi.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115114/Art/Karuna_Sheet_zmxp9g.jpg',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115242/Art/Karuna_lineart_matfg3.png',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115198/Art/LizzyFightSequence_pyeoeh.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115134/Art/Lizzy_BustShot_f12cc4.png',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115242/Art/MIlitaryKick1_xng31r.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115224/Art/MayaCrash_Relining_h4l9yb.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115223/Art/Meta_ZombieGif_vganqu.gif',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115385/Art/Mouse-Walk-Cycle_ColorA01_xxez3a.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115240/Art/Mouse01_w4sxt1.png',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115396/Art/RoundHouse-24fps-semi-2s_hypa4u.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115379/Art/RunAnimation_ajai4s.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115267/Art/Running_xdinlb.jpg',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115274/Art/Saphire_Wings_mu13zd.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115291/Art/ShyvRunning_omiz0f.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115276/Art/Sisters_fighting_jn6slm.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115270/Art/Strut3_drxsmz.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115269/Art/Strut_axclbd.gif',
        type: ''
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115274/Art/Yaaaas_nyj518.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115391/Art/handColorStudy_Fx_upldqz.png',
        type: 'tall'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115225/Art/karuna-getting-up_wekw0d.gif',
        type: 'long'
    },
    {
        link: 'https://res.cloudinary.com/dx3hv4esl/image/upload/v1617115377/Art/karuna_getting_up_qw8yrw.png',
        type: ''
    }
]

export default imageLinks