//membuat variable dengan nama, biodata dan tipe data object

const Bio = {
  name: 'Atio Wahyudi Saputra',
  age: 20,
  hobbies: ['Bermain musik', 'belajar ngoding', 'edit video'],
  isMaried: false,
  schoolList: [
    {
      name: 'SMPN 193 JAKARTA',
      yearIn: 2016,
      yearOut: 2019,
      major: null,
    },
    {
      name: 'SMKN 4 JAKARTA',
      yearIn: 2019,
      yearOut: 2022,
      major: 'Audio Video engineering',
    },
    {
      name: 'UBSI',
      yearIn: 2022,
      yearOut: 2026,
      major: 'Computer Science',
    },
  ],
  Skill: [
    {
      skillName: 'Javascript',
      level: 'Beginner',
    },
    {
      skillName: 'HTML',
      level: 'advanced',
    },
    {
      skillName: 'CSS',
      level: 'advanced',
    },
  ],
  interestInCoding: true,
};

console.log(Bio);
