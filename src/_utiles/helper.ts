export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const numberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertIndexToPersianWord = (index: number) => {
  const units = [
    "",
    "اول",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم",
    "هفتم",
    "هشتم",
    "نهم",
    "دهم",
  ];
  const teens = [
    "یازدهم",
    "دوازدهم",
    "سیزدهم",
    "چهاردهم",
    "پانزدهم",
    "شانزدهم",
    "هفدهم",
    "هجدهم",
    "نوزدهم",
  ];
  const tens = [
    "",
    "دهم",
    "بیستم",
    "سی‌ام",
    "چهلم",
    "پنجاهم",
    "شصتم",
    "هفتادم",
    "هشتادم",
    "نودم",
  ];
  const hundreds = ["", "صدم", "دویستم"];

  if (index <= 0 || index > 200) {
    return "خارج از محدوده";
  }

  const hundredPart = Math.floor(index / 100);
  const tenPart = Math.floor((index % 100) / 10);
  const unitPart = index % 10;

  let result = "";

  if (hundredPart > 0)
    result += hundreds[hundredPart] + (tenPart || unitPart ? " و " : "");

  if (tenPart === 1 && unitPart > 0) {
    result += teens[unitPart - 1];
  } else {
    if (tenPart > 0) result += tens[tenPart] + (unitPart ? " و " : "");
    if (unitPart > 0) result += units[unitPart];
  }

  return result;
};

export const justEnterNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const currentValue = e.currentTarget.value;
  if (/[^a-zA-Z\s]/.test(currentValue)) {
    e.preventDefault();
  }
};
