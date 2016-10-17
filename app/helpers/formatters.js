export function formattedMoney(amount) {
  const reversedAmount = getReversedStr(amount),
    splittedReversedAmount = reversedAmount.match(/.{1,3}/g) || [],
    splittedLength = splittedReversedAmount.length,
    formattedReversedMoney = splittedReversedAmount.map((segment, index) => {
      return (index + 1) === splittedLength ? getReversedStr(segment) : `,${getReversedStr(segment)}`;
    });
  return formattedReversedMoney.reverse().join('');
}

export function formattedMobile(mobile) {
  return `${mobile.substring(0, 4)} ${mobile.substring(4, 7)} ${mobile.substring(7, 10)}`;
}

function getReversedStr(str) {
  return str.split('').reverse().join('');
}
