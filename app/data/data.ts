// data.ts
import { StaticImageData } from 'next/image';

// Static imports for all images
// class 4a
import AmyArt from '../../public/images/4a/Amy.jpg';
import ArianArt from '../../public/images/4a/Arian.jpg';
import CatalinArt from '../../public/images/4a/Catalin.jpg';
import DariaArt from '../../public/images/4a/Daria.jpg';
import DavidArt from '../../public/images/4a/David.jpg';
import DianaArt from '../../public/images/4a/Diana.jpg';
import EnamArt from '../../public/images/4a/Enam.jpg';
import KhalidArt from '../../public/images/4a/Khalid.jpg';
import LamiaArt from '../../public/images/4a/Lamia.jpg';
import MasenArt from '../../public/images/4a/Masen.jpg';
import Milan from '../../public/images/4a/Milan.jpg';
import Milana from '../../public/images/4a/Milana.jpg';
import Milena from '../../public/images/4a/Milena.jpg';
import Miriam from '../../public/images/4a/Miriam.jpg';
import Mustafa from '../../public/images/4a/Mustafa.jpg';
import Nele from '../../public/images/4a/Nele.jpg';
import Noah from '../../public/images/4a/Noah.jpg';
import Reyana from '../../public/images/4a/Reyana.jpg';
import Sebastian from '../../public/images/4a/Sebastian.jpg';
import Sofia from '../../public/images/4a/Sofia.jpg';
import Tyler from '../../public/images/4a/Tyler.jpg';
import Zehra from '../../public/images/4a/Zehra.jpg';

// class 4c
import Baturay from '../../public/images/4c/Baturay.jpg';
import Abdelhakim from '../../public/images/4c/Abdelhakim.jpg';
import Elsie from '../../public/images/4c/Elsie.jpg';
import Efekan from '../../public/images/4c/Efekan.jpg';
import EmmaK from '../../public/images/4c/Emma-K.jpg';
import Emilia from '../../public/images/4c/Emilia.jpg';
import EmmaR from '../../public/images/4c/Emma-R.jpg';
import Fabio from '../../public/images/4c/Fabio.jpg';
import Finn from '../../public/images/4c/Finn.jpg';
import Gülvera from '../../public/images/4c/Gülvera.jpg';
import Hazar from '../../public/images/4c/Hazar.jpg';
import Hira_Nur from '../../public/images/4c/Hira_Nur.jpg';
import Jolina from '../../public/images/4c/Jolina.jpg';
import Julie from '../../public/images/4c/Julie.jpg';
import Kerem from '../../public/images/4c/Kerem.jpg';
import Lara from '../../public/images/4c/Lara.jpg';
import Leila from '../../public/images/4c/Leila.jpg';
import Lukas from '../../public/images/4c/Lukas.jpg';
import Manhal from '../../public/images/4c/Manhal.jpg';
import Marlon from '../../public/images/4c/Marlon.jpg';
import Melih from '../../public/images/4c/Melih.jpg';
import Mert from '../../public/images/4c/Mert.jpg';
import Miray from '../../public/images/4c/Miray.jpg';
import Nora from '../../public/images/4c/Nora.jpg';
import Öykü from '../../public/images/4c/Öykü.jpg';
import Sophia from '../../public/images/4c/Sophia.jpg';

interface Students {
  name: string;
  studentId: string;
  artPiece: StaticImageData;
  audio: string;
}

interface ClassData {
  class: string;
  students: Students[];
}

export const data: ClassData[] = [
  {
    class: '4a',
    students: [
      {
        name: 'Amy',
        studentId: '1',
        artPiece: AmyArt,
        audio: '/audio/4a/amy.mp3',
      },
      {
        name: 'Arian',
        studentId: '2',
        artPiece: ArianArt,
        audio: '/audio/4a/arian.mp3',
      },
      {
        name: 'Catalin',
        studentId: '3',
        artPiece: CatalinArt,
        audio: '/audio/4a/Catalin.mp3',
      },
      {
        name: 'Daria',
        studentId: '4',
        artPiece: DariaArt,
        audio: '/audio/4a/Daria.mp3',
      },
      {
        name: 'David',
        studentId: '5',
        artPiece: DavidArt,
        audio: '/audio/4a/David.mp3',
      },
      {
        name: 'Diana',
        studentId: '6',
        artPiece: DianaArt,
        audio: '/audio/4a/Diana.mp3',
      },
      {
        name: 'Enam',
        studentId: '7',
        artPiece: EnamArt,
        audio: '/audio/4a/Enam.mp3',
      },
      {
        name: 'Khalid',
        studentId: '8',
        artPiece: KhalidArt,
        audio: '/audio/4a/Khalid.mp3',
      },
      {
        name: 'Lamia',
        studentId: '9',
        artPiece: LamiaArt,
        audio: '/audio/4a/lamia-4a.mp3',
      },
      {
        name: 'Masen',
        studentId: '10',
        artPiece: MasenArt,
        audio: '/audio/4a/Masen.mp3',
      },
      {
        name: 'Milan',
        studentId: '11',
        artPiece: Milan,
        audio: '/audio/4a/Milan.mp3',
      },
      {
        name: 'Milana',
        studentId: '12',
        artPiece: Milana,
        audio: 'www.lucas-audio.com',
      },
      {
        name: 'Milena',
        studentId: '13',
        artPiece: Milena,
        audio: 'www.ava-audio.com',
      },
      {
        name: 'Miriam',
        studentId: '14',
        artPiece: Miriam,
        audio: '/audio/4a/Miriam.mp3',
      },
      {
        name: 'Mustafa',
        studentId: '15',
        artPiece: Mustafa,
        audio: '/audio/4/Mustafa.mp3',
      },
      {
        name: 'Nele',
        studentId: '16',
        artPiece: Nele,
        audio: '/audio/4a/Nele.mp3',
      },
      {
        name: 'Noah',
        studentId: '17',
        artPiece: Noah,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Reyana',
        studentId: '18',
        artPiece: Reyana,
        audio: '/audio/4a/Reyana.mp3',
      },
      {
        name: 'Sebastian',
        studentId: '19',
        artPiece: Sebastian,
        audio: '/audio/4a/Sebastian.mp3',
      },
      {
        name: 'Sofia',
        studentId: '20',
        artPiece: Sofia,
        audio: '/audio/4a/Sofia.mp3',
      },
      {
        name: 'Tyler',
        studentId: '21',
        artPiece: Tyler,
        audio: '/audio/4a/Tyler.mp3',
      },
      {
        name: 'Zehra',
        studentId: '22',
        artPiece: Zehra,
        audio: '/audio/4a/Zehra.mp3',
      }
    ],
  },
  {
    class: '4c',
    students: [
      {
        name: 'Abdelhakim',
        studentId: '23',
        artPiece: Abdelhakim,
        audio: '/audio/4c/Abdelhakim.mp3',
      },
      {
        name: 'Baturay',
        studentId: '24',
        artPiece: Baturay,
        audio: '/audio/4c/Baturay.mp3',
      },
      {
        name: 'Efekan',
        studentId: '25',
        artPiece: Efekan,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Elsie',
        studentId: '26',
        artPiece: Elsie,
        audio: '/audio/4c/Elsie.mp3',
      },
      {
        name: 'Emilia',
        studentId: '27',
        artPiece: Emilia,
        audio: '/audio/4c/Emilia.mp3',
      },
      {
        name: 'Emma K',
        studentId: '28',
        artPiece: EmmaK,
        audio: '/audio/4c/Emma_K.mp3',
      },
      {
        name: 'Emma R',
        studentId: '29',
        artPiece: EmmaR,
        audio: '/audio/4c/Emma_R.mp3',
      },
      {
        name: 'Fabio',
        studentId: '30',
        artPiece: Fabio,
        audio: '/audio/4c/fabio4c.mp3',
      },
      {
        name: 'Finn',
        studentId: '31',
        artPiece: Finn,
        audio: '/audio/4c/Finn.mp3',
      },
      {
        name: 'Gülvera',
        studentId: '32',
        artPiece: Gülvera,
        audio: '/audio/4c/Gülvera.mp3'
      },
      {
        name: 'Hazar',
        studentId: '33',
        artPiece: Hazar,
        audio: '/audio/4c/Hazar.mp3'
      },
      {
        name: 'Hira Nur',
        studentId: '34',
        artPiece: Hira_Nur,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Jolina',
        studentId: '35',
        artPiece: Jolina,
        audio: '/audio/4c/Jolina.mp3'
      },
      {
        name: 'Julie',
        studentId: '36',
        artPiece: Julie,
        audio: '/audio/4c/Julie.mp3'
      },
      {
        name: 'Kerem',
        studentId: '37',
        artPiece: Kerem,
        audio: '/audio/4c/Kerem.mp3'
      },
      {
        name: 'Lara',
        studentId: '38',
        artPiece: Lara,
        audio: '/audio/4c/Lara.mp3'
      },
      {
        name: 'Leila',
        studentId: '39',
        artPiece: Leila,
        audio: '/audio/4c/Leila.mp3'
      },
      {
        name: 'Lukas',
        studentId: '40',
        artPiece: Lukas,
        audio: '/audio/4c/Lukas.mp3'
      },
      {
        name: 'Manhal',
        studentId: '41',
        artPiece: Manhal,
        audio: '/audio/4c/Manhal.mp3'
      },
      {
        name: 'Marlon',
        studentId: '42',
        artPiece: Marlon,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Melih',
        studentId: '43',
        artPiece: Melih,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Mert',
        studentId: '44',
        artPiece: Mert,
        audio: '/audio/4c/Mert.mp3'
      },
      {
        name: 'Miray',
        studentId: '45',
        artPiece: Miray,
        audio: '/audio/4c/Miray.mp3'
      },
      {
        name: 'Nora',
        studentId: '46',
        artPiece: Nora,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Öykü',
        studentId: '47',
        artPiece: Öykü,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Sophia',
        studentId: '48',
        artPiece: Sophia,
        audio: 'www.mason-audio.com'
      },
    ],
  },
];


