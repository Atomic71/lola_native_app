import {APP_ROUTES} from './routes';

export const COMMON = {
  loading: 'Ucitava...',
};

export const COPYRIGHT = '© Copyright 2021 Lola Marazin. All rights reserved.';
export const MENU = {
  title: 'MENI',
  navItems: [
    {text: 'POCETNA', path: APP_ROUTES.home},
    {text: 'O LOLI', path: APP_ROUTES.about},
    {text: 'AUTORI', path: APP_ROUTES.authors},
    {text: 'USLOVI KORISTENJA', path: APP_ROUTES.terms},
  ],
};
export const TEXT_SIZE = {
  title: 'VELICINA PISMA: ',
  options: [{}],
};
export const LAT_CYR = {
  title: 'PISMO: ',
  options: [{}],
};

export const TAC = {
  title: 'USLOVI KORISTENJA',
};

export const ABOUT = {
  title: 'Sve sto zelimo jeste da budemo tu za Vas!',
  content: [
    'Lola je žena – oksimoron. Ne voli pompu, ali je zavidne oči stalno promatraju. Mijenja gumu na automobilu u visokim potpeticama. Rasplače se zbog filma, ali se životu smije u lice. U djetinjstvu je igrala fudbal sa dječacima. I pobjeđivala.',
    'Lola magazin trudi se da Vam prenese važne, inspirativne i zanimljive priče u nekoliko grupa: one koje morate znati, one kojih Vam neće biti dosta i one koje ćete obožavati. Ekipa portala se sastoji iz ozbiljnih profesionalaca, kako u spisateljskom, tako i u tehničkom segmentu. Lolamagazin.com je portal za ženu sa velikim Ž. Ne bavimo se tračevima, već stavovima. Razbijamo stereotipe, mijenjamo medijsku i društvenu sliku i popravljamo svijet – red po red. Ukoliko Vam ove rečenice djeluju pretenciozno, pročitajte ih ponovo za godinu ili dvije.',
    'Dobro došli.',
  ],
  social: {
    title: 'PRATI NAS',
    writeToUs: 'PISI NAM',
    email: 'lola@dotmedia.ba',
  },
};

export const SEARCH = {
  title: 'Sta zelite danas da procitate?',
  previousSearch: 'PRETHODNE PRETRAGE',
};

export const AUTHORS = {
  title: 'Autori',
};
export const AUTHOR = {
  about: 'O MENI',
  posts: 'POSTOVI',
};
