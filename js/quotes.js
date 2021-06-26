const quotes = [
    {
        quote : "사용하지 않으면 기억하지 않는다.",
        author : "이도운"
    },
    {
        quote : "필요하지 않으면 학습하지 않는다.",
        author : "이도운"
    },
    {
        quote : "좋은 수면은 코딩 실력을 늘려준다.",
        author : "이도운"
    },
    {
        quote : "용기의 반대말은 순응이다.",
        author : "짐 하이타워"
    },
    {
        quote : "위기인데도 불구하고 위기인 것을 모르는 것이 진짜 위기입니다. 그보다 더 큰 위기는 뭔지 아십니까? 위기인 걸 알면서도 아무 것도 하지 않는 것이 바로 더 큰 위기입니다.",
        author : "유재석"
    },
    {
        quote : "웃어라, 온 세상이 너와 함께 웃을 것이다. 울어라. 너 혼자 울 것이다.",
        author : "엘라 휠러 윌콕스"
    },
    {
        quote : "앞에서 할 수 없는 말은 뒤에서도 하지 마라.",
        author : "유재석"
    },
    {
        quote : "말을 독점하면 적이 많아진다.",
        author : "유재석"
    },
    {
        quote : "목소리 톤이 높아질수록 뜻은 왜곡된다.",
        author : "유재석"
    },
    {
        quote : "칭찬에 발이 달려 있다면 험담에는 날개가 달려 있다.",
        author : "유재석"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;