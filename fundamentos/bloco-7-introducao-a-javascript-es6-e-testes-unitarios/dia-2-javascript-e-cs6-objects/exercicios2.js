const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addNight = () => {
  lesson2.turno = 'Noite';
 return lesson2;
}
console.table(addNight())

const keysList = () => {
  return Object.keys(lesson1);
}
console.log(keysList());

const objectLength = () => {
  return Object.entries(lesson3).length;
}
console.log("O tamanho do objeto é " + objectLength());

const objectValues = () => {
  return Object.values(lesson1);
}
console.log(objectValues());

const allLessons = Object.assign(lesson1, lesson2, lesson3);
console.log(allLessons);