const LZString = require('lz-string');

let input, output, valid;

// 1
input = 'text,part_of_speech,tokens,readings\n' +
  'シングルページアプリケーション,カスタム名詞,シングルページアプリケーション,シングルページアプリケーション\n' +
  'サポートライブラリ,カスタム名詞,サポートライブラリ,サポートライブラリ\n' +
  '動画コース,カスタム名詞,動画コース,動画コース';
output = LZString.compress(input);
valid = LZString.decompress(output);
console.log(input.length, output.length, input === valid);

// 2
const json = [
  {
    "text": "すしネコ",
    "tokens": [
      "すし",
      "ネコ"
    ],
    "readings": [
      "寿司",
      "ネコ"
    ],
    "part_of_speech": "カスタム名詞"
  }
];
input = JSON.stringify(json);
output = LZString.compress(input);
valid = LZString.decompress(output);
console.log(input.length, output.length, input === valid);