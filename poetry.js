'use strict';
export default function poetry(verse) {
  let result = null;
  const poems = {
    a: 'اگر دل از تو بگیرم کجا روم ای دوست؟\nبه هر کجا که روم با تو آشنا باشم',
    b: 'بیا تا گل بر افشانیم و می در ساغر اندازیم\nفلک را سقف بشکافیم و طرحی نو دراندازیم',
    c: 'پاییز آمد و برگ از درختان ریخت\nدل بی‌قرار من باز به یادت گریخت',
    d: 'تو را من چشم در راهم شباهنگام\nکه می‌گیرند در شاخ تلاجن سایه‌ها رنگ سیاهی',
  };

  verse = verse.trim();
  const stanza = verse.split('\n');
  let lastLetter = verse[verse.length - 1];

  if (!poems[lastLetter]) {
    if (stanza.length > 1) {
      lastLetter = stanza[stanza.length - 1].slice(-1);
    }
    if (!poems[lastLetter] && stanza.length > 0) {
      lastLetter = stanza[0].slice(-1);
    }
  }

  result = poems[lastLetter] || poems['a'];
  console.log(result);
  return null;
}

console.log(
  poetry(
    'اگر دل از تو بگیرم کجا روم ای دوست؟\nبه هر کجا که روم با تو آشنا باشم'
  )
);
