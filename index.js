// const Number = 1
// switch (Number) {
//   case 1:
//     console.log('Понедельник');
//     break;
//   case 2:
//     console.log('Вторник');
//     break;
//   case 3:
//     console.log('Среда');
//     break;
//   case 4:
//     console.log('Четверг');
//     break;
//   case 5:
//     console.log('Пятница');
//     break;
//   case 6:
//     console.log('Суббота');
//     break;
//   case 7:
//     console.log('Воскресенье');
//     break;
//   default:
//     console.log('. ');
// }

const number = +prompt("Введите число (0-дон, 1-ке, 2-ге, 3-ке):", "");

switch (number) {
    case 0:
        alert("Силер 0 санын жаздынар");
        break;
    case 1:
        alert("Силер 1 санын жаздынар");
        break;
    case 2:
    case 3:
        alert("Силер 2 же 3 санын жаздынар");
        break;
    default:
        alert("Силер жарамсыз сан киргиздиңиз");
}
