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
        audio: '/audio/4a/lamia-4a.mp3',
      },
      {
        name: 'Masen',
        studentId: '10',
        artPiece: MasenArt,
        audio: 'www.audio.com',
      },
      {
        name: 'Milan',
        studentId: '11',
        artPiece: Milan,
        audio: 'www.olivia-audio.com',
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
        audio: 'www.ethan-audio.com',
      },
      {
        name: 'Mustafa',
        studentId: '15',
        artPiece: Mustafa,
        audio: 'www.isabella-audio.com',
      },
      {
        name: 'Nele',
        studentId: '16',
        artPiece: Nele,
        audio: 'www.mia-audio.com',
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
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Sebastian',
        studentId: '19',
        artPiece: Sebastian,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Sofia',
        studentId: '20',
        artPiece: Sofia,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Tyler',
        studentId: '21',
        artPiece: Tyler,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Zehra',
        studentId: '22',
        artPiece: Zehra,
        audio: 'www.mia-audio.com',
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
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Baturay',
        studentId: '24',
        artPiece: Baturay,
        audio: 'www.mason-audio.com',
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
        audio: '/audio/4c-1/Elsie4c.mp3',
      },
      {
        name: 'Emilia',
        studentId: '27',
        artPiece: Emilia,
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Emma K',
        studentId: '28',
        artPiece: EmmaK,
        audio: 'www.mason-audio.com',
      },
      {
        name: 'Emma R',
        studentId: '29',
        artPiece: EmmaR,
        audio: 'www.mia-audio.com',
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
        audio: 'www.mia-audio.com',
      },
      {
        name: 'Gülvera',
        studentId: '32',
        artPiece: Gülvera,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Hazar',
        studentId: '33',
        artPiece: Hazar,
        audio: 'www.mason-audio.com'
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
        audio: '/audio/4c/Joline4c.mp3'
      },
      {
        name: 'Julie',
        studentId: '36',
        artPiece: Julie,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Kerem',
        studentId: '37',
        artPiece: Kerem,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Lara',
        studentId: '38',
        artPiece: Lara,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Leila',
        studentId: '39',
        artPiece: Leila,
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Lukas',
        studentId: '40',
        artPiece: Lukas,
        audio: 'www.mia-audio.com'
      },
      {
        name: 'Manhal',
        studentId: '41',
        artPiece: Manhal,
        audio: 'www.mia-audio.com'
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
        audio: 'www.mason-audio.com'
      },
      {
        name: 'Miray',
        studentId: '45',
        artPiece: Miray,
        audio: 'www.mia-audio.com'
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


