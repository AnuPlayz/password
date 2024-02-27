import { NextApiRequest, NextApiResponse } from 'next';

function generatePassword(): string {
  const MAX_LEN = 12;

  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const LOCASE_CHARACTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
    'z'
  ];
  const UPCASE_CHARACTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z'
  ];
  const SYMBOLS = ['@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>', '*', '(', ')', '<'];

  const COMBINED_LIST = [...DIGITS, ...LOCASE_CHARACTERS, ...UPCASE_CHARACTERS, ...SYMBOLS];

  let temp_pass = '';

  const rand_digit = DIGITS[Math.floor(Math.random() * DIGITS.length)];
  const rand_upper = UPCASE_CHARACTERS[Math.floor(Math.random() * UPCASE_CHARACTERS.length)];
  const rand_lower = LOCASE_CHARACTERS[Math.floor(Math.random() * LOCASE_CHARACTERS.length)];
  const rand_symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  temp_pass += rand_digit + rand_upper + rand_lower + rand_symbol;

  for (let i = 0; i < MAX_LEN - 4; i++) {
    temp_pass += COMBINED_LIST[Math.floor(Math.random() * COMBINED_LIST.length)];
  }

  const temp_pass_list = temp_pass.split('');
  temp_pass_list.sort(() => Math.random() - 0.5);

  return temp_pass_list.join('');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const password = generatePassword();
    res.status(200).json({ password });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
