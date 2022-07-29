function converterAngka(num) {
  let a = [
    "",
    "satu ",
    "dua ",
    "tiga ",
    "empat ",
    "lima ",
    "enam ",
    "tujuh ",
    "delapan ",
    "sembilan ",
    "sepuluh ",
    "sebelas ",
    "dua belas ",
    "tiga belas ",
    "empat belas ",
    "lima belas ",
    "enam belas ",
    "tujuh belas ",
    "delapan belas ",
    "sembilan belas ",
  ];
  let b = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
  if ((num = num.toString()).length > 6) return "Angka yang masukan melebihi batas maksimal (maksimal 6 angka)";
  let n = ("0000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = "";
  str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "juta " : "";
  str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "ratus ribu " : "";
  str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "ribu " : "";
  str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "ratus " : "";
  str += n[5] != 0 ? (str != "" ? "" : "") + (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) + " " : "";
  return str;
}
console.log(converterAngka(12));
console.log(converterAngka(2012));
console.log(converterAngka(999999));
