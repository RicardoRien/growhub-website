import env from '../images/environment.svg';
import dev from '../images/programmer.svg';
import sec from '../images/sec.svg';
import data from '../images/data.svg';

export const tecnologia = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Tecnología y Ambiente',
  headline: 'Horticultura urbana tecnológica para todos',
  description:
    'Nuestro sofware te acesora, supervisa y mejora tus cultivos urbanos además de ser altamente soportada por la comunidad por su código abierto.',
  buttonLabel: '¡Empieza Ahora!',
  linkTo: 'signup',
  imgStart: 'start',
  img: env,
  alt: 'Environment'
};

export const comunidad = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Amado por la comunidad',
  headline: 'El software es atendido por la comunidad',
  description:
    "Sin importar el tipo de cultivo, la comunidad aporta semanalmente grandes cambios y variaciones d nustro software modular para hacer más amplio la cartera de plantas que el usuario podrá cultivar sin procuparse.",
  buttonLabel: 'Abrir Repositorio',
  linkTo: 'signup',
  imgStart: '',
  img: dev,
  alt: 'Programmer'
};


export const seguridad = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '100% Seguro',
  headline: 'Protegemos tus datos',
  description:
    '¡Confía en nosotros! No vendemos tus datos sensibles a terceros, la seguridad y confianza es menester para nuestro producto',
  buttonLabel: 'Leer Políticas',
  imgStart: 'start',
  img: sec,
  alt: 'Seguridad'
};

export const estadistica = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Ciencia De Datos',
  headline: 'Ofrecemos estadísticas de tus cosechas para mejorarlas',
  description:
    'Analizamos los datos para ofrecer un mejor servicio y los abrimos anónimamente a la comunidad, para así enfocarnos en una mejor experiencia de usuario, cosechas más fértiles y ahorro de tiempo.',
  buttonLabel: 'Registrate Ahora',
  linkTo: 'signup',
  imgStart: '',
  img: data,
  alt: 'Data'
};