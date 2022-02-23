const result = document.querySelector('.result');

const result_nowPrice = document.querySelector('.result_nowPrice');
const result_nowCount = document.querySelector('.result_nowCount');
const result_nowSum = document.querySelector('.result_nowSum')
const result_addPrice = document.querySelector('.result_addPrice');
const result_addCount = document.querySelector('.result_addCount');
const result_addSum = document.querySelector('.result_addSum');

const result_averagePrice1 = document.querySelector('.result_averagePrice1');
const result_averagePrice2 = document.querySelector('.result_averagePrice2');
const result_CountSum = document.querySelector('.result_CountSum');
const result_allSum = document.querySelector('.result_allSum');


function calHandler() {

  const nowPrice = Number(document.getElementById("nowPrice").value);
  const nowCount = Number(document.getElementById("nowCount").value);
  const addPrice = Number(document.getElementById("addPrice").value);
  const addCount = Number(document.getElementById("addCount").value);

  if (nowPrice == 0 || nowCount == 0 || addPrice == 0 || addCount == 0) {

    alert("데이터를 입력해주세요");

  } else {

    calResult(nowPrice, nowCount, addPrice, addCount);
  }

}


function calResult(nowPrice, nowCount, addPrice, addCount) {

  // 현재보유 계산 

  result_nowPrice.innerHTML = nowPrice.toLocaleString();
  result_nowCount.innerHTML = nowCount.toLocaleString();

  const nowSum = nowPrice * nowCount;
  result_nowSum.innerHTML = nowSum.toLocaleString();


  // 추가매수 계산

  result_addPrice.innerHTML = addPrice.toLocaleString();
  result_addCount.innerHTML = addCount.toLocaleString();

  const addSum = addPrice * addCount;
  result_addSum.innerHTML = addSum.toLocaleString();

  // 최종계산
  let averagePrice =
    ((nowPrice * nowCount) + (addPrice * addCount))
    / (nowCount + addCount)

  result_averagePrice1.innerHTML = `평단가 : ${averagePrice.toLocaleString()} 원`;
  result_averagePrice2.innerHTML = averagePrice.toLocaleString();

  const countSum = nowCount + addCount;
  result_CountSum.innerHTML = countSum.toLocaleString();

  const allSum = nowSum + addSum;
  result_allSum.innerHTML = allSum.toLocaleString();

  goResult(nowPrice, averagePrice);

}



function goResult(nowPrice, averagePrice) {

  result.style.display = 'block';

  let result_percent = document.querySelector('.result_percent');
  let percent = ((averagePrice - nowPrice) / nowPrice) * 100;


  if (nowPrice > averagePrice) {
    result_percent.innerHTML = `평단가가 ${percent.toFixed(1)}% 내려갔습니다.`;
  } else {
    result_percent.innerHTML = `평단가가 ${percent.toFixed(1)}% 올라갔습니다.`;
  }

  let prograss = document.querySelector('.prograss_bar');

  if (percent > 0) {
    prograss.style.width = percent + '%';
  }
  else {
    prograss.style.width = '0';
  }

}


//초기화
function allreset() {

  nowPrice.value = null;
  nowCount.value = null;
  addPrice.value = null;
  addCount.value = null;

  result.style.display = 'none';

}