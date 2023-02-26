document.getElementById('bold').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. fontWeight='700';
    console.log(textArea)
})
document.getElementById('italic').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. fontStyle='italic';
    console.log(textArea)
})
document.getElementById('underline').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. textDecoration='underline';
    console.log(textArea)
})
document.getElementById('leftText').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. textAlign='left';
    console.log(textArea)
})
document.getElementById('centerText').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. textAlign='center';
    console.log(textArea)
})
document.getElementById('rightText').addEventListener('click',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. textAlign='right';
    console.log(textArea)
})
document.getElementById('colorPicker').addEventListener('mouseover',function(){
    const textArea=document.getElementById('textarea');
    textArea.style. color=document.getElementById('colorPicker').value;
    console.log(textArea)
})
