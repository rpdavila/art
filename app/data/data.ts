// data.ts
import { StaticImageData } from 'next/image';

// Static imports for all images
// class 4a1
import AmyArt from '../public/4a-1/Amy.jpg';
import ArianArt from '../public/4a-1/Arian.jpg';
import CatalinArt from '../public/4a-1/Catalin.jpg';
import DariaArt from '../public/4a-1/Daria.jpg';
import DavidArt from '../public/4a-1/David.jpg';
import DianaArt from '../public/4a-1/Diana.jpg';
import EnamArt from '../public/4a-1/Enam.jpg';
import KhalidArt from '../public/4a-1/Khalid.jpg';
import LamiaArt from '../public/4a-1/Lamia.jpg';
import MasenArt from '../public/4a-1/Masen.jpg';

//class 4a2
import Milan from '../public/4a-2/Milan.jpg';
import Milana from '../public/4a-2/Milana.jpg';
import Milena from '../public/4a-2/Milena.jpg';
import Miriam from '../public/4a-2/Miriam.jpg';
import Mustafa from '../public/4a-2/Mustafa.jpg';
import Nele from '../public/4a-2/Nele.jpg';
import Noah from '../public/4a-2/Noah.jpg';
import Reyana from '../public/4a-2/Reyana.jpg';
import Sebastian from '../public/4a-2/Sebastian.jpg';
import Sofia from '../public/4a-2/Sofia.jpg';
import Tyler from '../public/4a-2/Tyler.jpg';
import Zehra from '../public/4a-2/Zehra.jpg';

//4c-1
import Abdelhakim from '../public/4c-1/Abdelhakim.jpg';
import Baturay from '../public/4c-1/Baturay.jpg';
import Efekan from '../public/4c-1/Efekan.jpg';
import Elsie from '../public/4c-1/Elsie.jpg';
import Emilia from '../public/4c-1/Emilia.jpg';
import EmmaK from '../public/4c-1/Emma-K.jpg';
import EmmaR from '../public/4c-1/Emma-R.jpg';
import Fabio from '../public/4c-1/Fabio.jpg';
import Finn from '../public/4c-1/Fabio.jpg';

//4c-2
import Gülvera from '../public/4c-2/Gülvera.jpg';
import Hazar from '../public/4c-2/Hazar.jpg';
import Hira_Nur from '../public/4c-2/Hira_Nur.jpg';
import Jolina from '../public/4c-2/Jolina.jpg';
import Julie from '../public/4c-2/Julie.jpg';
import Kerem from '../public/4c-2/Kerem.jpg';
import Lara from '../public/4c-2/Lara.jpg';
import Leila from '../public/4c-2/Leila.jpg';
import Lukas from '../public/4c-2/Lukas.jpg';

//4c-3
import Manhal from '../public/4c-3/Manhal.jpg';
import Marlon from '../public/4c-3/Marlon.jpg';
import Melih from '../public/4c-3/Melih.jpg';
import Mert from '../public/4c-3/Mert.jpg';
import Miray from '../public/4c-3/Miray.jpg';
import Nora from '../public/4c-3/Nora.jpg';
import Öykü from '../public/4c-3/Öykü.jpg';
import Sophia from '../public/4c-3/Sophia.jpg';

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
    class: '4a-1',
    students: [
      {
        name: 'Amy',
        studentId: '1',
        artPiece: AmyArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Arian',
        studentId: '2',
        artPiece: ArianArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Catalin',
        studentId: '3',
        artPiece: CatalinArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Daria',
        studentId: '4',
        artPiece: DariaArt,
        audio: 'www.audio.com',
      },
      {
        name: 'David',
        studentId: '5',
        artPiece: DavidArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Diana',
        studentId: '6',
        artPiece: DianaArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Enam',
        studentId: '7',
        artPiece: EnamArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Khalid',
        studentId: '8',
        artPiece: KhalidArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Lamia',
        studentId: '9',
        artPiece: LamiaArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Masen',
        studentId: '10',
        artPiece: MasenArt,
        audio: 'www.audio.com',
      },
    ],
  },
  {
    class: '4a-2',
    students: [
      {
        name: 'Milan',
        studentId: '6',
        artPiece: Milan,
        audio: 'www.olivia-audio.com',
      },
      {
        name: 'Milana',
        studentId: '7',
        artPiece: Milana,
        audio: 'www.lucas-audio.com',
      },
      {
        name: 'Milena',
        studentId: '8',
        artPiece: Milena,
        audio: 'www.ava-audio.com',
      },
      {
        name: 'Miriam',
        studentId: '9',
        artPiece: Miriam,
        audio: 'www.ethan-audio.com',
      },
      {
        name: 'Mustafa',
        studentId: '10',
        artPiece: Mustafa,
        audio: 'www.isabella-audio.com',
      },
      {
        name: 'Nele',
        studentId: '11',
        artPiece: Nele,
        audio: ''
      },
      {
        name: 'Noah',
        studentId: '12',
        artPiece: Noah,
        audio: '',
      },
      {
        name: 'Reyana',
        studentId: '13',
        artPiece: Reyana,
        audio: '',
      },
      {
        name: 'Sebastian',
        studentId: '14',
        artPiece: Sebastian,
        audio: '',
      },
      {
        name: 'Sofia',
        studentId: '15',
        artPiece: Sofia,
        audio: '',
      },
      {
        name: 'Tyler',
        studentId: '16',
        artPiece: Tyler,
        audio: '',
      },
      {
        name: 'Zehra',
        studentId: '17',
        artPiece: Zehra,
        audio: '',
      }
    ],
  },
  {
    class: '4c-1',
    students: [
      {
        name: 'Abdelhakim',
        studentId: '11',
        artPiece: Abdelhakim,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Baturay',
        studentId: '12',
        artPiece: Baturay,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Efekan',
        studentId: '13',
        artPiece: Efekan,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Elsie',
        studentId: '14',
        artPiece: Elsie,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Emilia',
        studentId: '15',
        artPiece: Emilia,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Emma K',
        studentId: '16',
        artPiece: EmmaK,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Emma R',
        studentId: '17',
        artPiece: EmmaR,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Fabio',
        studentId: '18',
        artPiece: Fabio,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Finn',
        studentId: '19',
        artPiece: Finn,
        audio: 'www.mia-audio.com',
      },
    ],
  },
  {
    class: '4c-2',
    students: [
      {
        name: 'Gülvera',
        studentId: '20',
        artPiece: Gülvera,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Hazar',
        studentId: '21',
        artPiece: Hazar,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Hira Nur',
        studentId: '22',
        artPiece: Hira_Nur,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Jolina',
        studentId: '23',
        artPiece: Jolina,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Julie',
        studentId: '24',
        artPiece: Julie,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Kerem',
        studentId: '25',
        artPiece: Kerem,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Lara',
        studentId: '26',
        artPiece: Lara,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Leila',
        studentId: '27',
        artPiece: Leila,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Lukas',
        studentId: '28',
        artPiece: Lukas,
        audio: 'www.mia-audio.com'
      },
    ],
  },
  {
    class: '4c-3',
    students: [
      {
        name: 'Manhal',
        studentId: '29',
        artPiece: Manhal,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Marlon',
        studentId: '30',
        artPiece: Marlon,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Melih',
        studentId: '31',
        artPiece: Melih,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Mert',
        studentId: '32',
        artPiece: Mert,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Miray',
        studentId: '33',
        artPiece: Miray,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Nora',
        studentId: '34',
        artPiece: Nora,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Öykü',
        studentId: '35',
        artPiece: Öykü,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Sophia',
        studentId: '36',
        artPiece: Sophia,
        audio: 'www.mason-audio.com'
      },
    ],
  },
];


