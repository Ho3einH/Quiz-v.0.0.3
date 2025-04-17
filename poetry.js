'use strict';
const poems = {
  a: 'به هر کجا که روم با تو آشنا باشم\nاگر دل از تو بگیرم کجا روم ای دوست',
  b: 'فلک را سقف بشکافیم و طرحی نو دراندازیم\nبیا تا گل بر افشانیم و می در  ساغر اندازیم',
  c: 'پاییز آمد و برگ از درختان ریخت\nدل بی قرار من باز به یادت گریخت',
  d: 'تو را من چشم در راهم شباهنگام\nکه می‌گیرند در شاخ تلاجن سایه‌ها رنگ سیاهی',
  e: 'هر بلائی کز تو آید نعمتی است\nهرکه را رنجی دهی آن راحتی است',
  f: 'زان به تاریکی گذاری بنده را\nتا ببیند آن رخ تابنده را',
  g: 'محتسب، مستی به ره دید و گریبانش گرفت\nمست گفت: ای دوست، این پیراهن است، افسار نیست',
  h: 'گفت: مستی، زان سبب افتان و خیزان می روی\nگفت: جرم راه رفتن نیست، ره هموار نیست',
  i: 'که شادی و غم گیتی نمیکنند دوام\nز غم مباش غمین و مشو ز شادی شاد',
  j: 'چون پر کاه بی سر و سامان نمی‌شود\nآنکس که همنشین خرد شد، ز هر نسیم',
};
export default function poetry(verse) {
  let result = null;

  verse = verse.trim().split('\n').reverse().join(' / ');
  const lastLetter = verse.charAt(verse.length - 1);
  for (const [index, el] of Object.entries(poems)) {
    const firstLetter = el.charAt(0);
    (firstLetter[0] || firstLetter[1]) === lastLetter ? (result = el) : null;
  }

  return result;
}

console.log(`-------------------------- 6 ---------------------------`);

console.log(poetry(poems.a));
console.log(poetry(poems.b));
console.log(poetry(poems.c));
