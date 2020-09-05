//feetToMile
function feetToMile(feet){
if(feet<0){
   
    return ' input is not valid';
}
else{
    var mile = feet*0.000189393939;
   return mile;
}   
}


var feet = -5;

console.log(feetToMile(feet));



//woodCalculator

function woodCalculator(NoOfChair,NoOfTable,NoOfbed){

    if(NoOfChair >0 && NoOfTable>0 && NoOfbed>0){
        var neededWoodChair = NoOfChair;
        var neededWoodtable = NoOfTable * 3;
        var neededWoodbed = NoOfbed * 5;
        var totalNeededWood=neededWoodChair + neededWoodbed +neededWoodtable;
        return totalNeededWood;
    }
    else{
        return 'input is not valid';
    }
 }
 

var NoOfChair = 5;
var NoOfTable = 10;
var NoOfbed = 15;

console.log(woodCalculator(NoOfChair,NoOfTable,NoOfbed));



//brickcalculator

function brickCalculator(noOfTala){
    if(noOfTala<=10){
        var totalbrick = noOfTala * 15 * 1000;
        return totalbrick;
    }
    else if(noOfTala>10 && noOfTala <=20){
        var step2building = noOfTala-10;
        var step1building = noOfTala-step2building;
        var step2result = step2building * 12 * 1000;
        var step1result = step1building * 15 * 1000;
        return step1result +step2result ;
    }
    else if(noOfTala>20)
    {
        var step3building = noOfTala-20;
        var step2building = 10;
        var step1building = 10;
        var step3result = step3building * 10 *1000;
        var step2result = step2building * 12 * 1000;
        var step1result = step1building * 15 * 1000;
        return step3result + step2result + step1result;

    }
}
var noOfTala = 11;

console.log(brickCalculator(noOfTala));

//tinyFriend

function tinyFriend(friends){
    var tiny = friends[0];
    for(let i = 0;i<friends.length;i++){
        let name =friends[i];
        if(name.length<tiny.length){
            tiny = name;
        }
    }
    return tiny;
}
var friends=['arif','razu','samrat','abbu','ammu','apu'];
console.log(tinyFriend(friends));