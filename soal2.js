const bahasaIndonesia = 90;
const mtk = 90;
const ipa = 90;
const bahasaInggris = 90;

//validasi
if (
  bahasaIndonesia === '' ||
  mtk === '' ||
  ipa === '' ||
  bahasaInggris === ''
) {
  console.log('error: semua nilai harus diinput');
} else {
  const totalNilai = bahasaIndonesia + ipa + mtk + bahasaInggris;
  const rataRata = totalNilai / 4;
  console.log(`Rata-rata: ${rataRata}`);
  if (rataRata <= 100 && rataRata >= 90) {
    console.log('Grade: A');
  } else if (rataRata <= 89 && rataRata >= 80) {
    console.log('Grade: B');
  } else if (rataRata <= 79 && rataRata >= 70) {
    console.log('Grade: C');
  } else if (rataRata <= 69 && rataRata >= 60) {
    console.log('Grade: D');
  } else if (rataRata <= 59 && rataRata >= 0) {
    console.log('Grade: E');
  }
}


