module.exports = function check(str, bracketsConfig) {
    var stringOfBracket=str.split('');
    function vertBracketChanger (arr) {
        var x=0;
        for (var z =0; z<arr.length; z++) {
            if (arr[z]=='|'){
                if (x==0) {
                    arr[z]='lb';
                    x=1;
                } else {
                    arr[z]='rb';
                    x=0;
                }
            }
        }
        return(arr);
    }
    var brConfig='';  
    var index=0;
    var answer=true;
    var a=0; //круглые скобки
    var b=0; //квадратные скобки
    var c=0; //фигурные скобки
    var d=0; //вертикальные скобки
    for (var i=0;i<bracketsConfig.length;i++){
        brConfig=bracketsConfig[0].join('');        
    }
    brConfig=brConfig.split('');
    function typeOfBracket(Bracket) {
        if (Bracket=='(') {a++}
        if (Bracket=='[') {b++}
        if (Bracket=='{') {c++}
        if (Bracket=='lb') {d++}
        if (Bracket==')') {a--}
        if (Bracket==']') {b--}
        if (Bracket=='}') {c--}
        if (Bracket=='rb') {d--}
        if (Bracket==='0') {return}
    }
    function checker(ind, strArray){
        a=0; //круглые скобки
        b=0; //квадратные скобки
        c=0; //фигурные скобки
        d=0; //вертикальные скобки
        typeOfBracket(strArray[ind]);
        var k=ind+1;
        if (strArray[ind]=='(') {
            while (a!==0 && k<strArray.length) {
                typeOfBracket(strArray[k]);
                k++;
            } 
        }
        if (strArray[ind]=='[') {
            while (b!==0 && k<strArray.length) {
                typeOfBracket(strArray[k]);
                k++;
            } 
        }
        if (strArray[ind]=='{') {
            while (c!==0 && k<strArray.length) {
                typeOfBracket(strArray[k]);
                k++;
            } 
        }
        if (strArray[ind]=='lb') {
            while (d!==0 && k<strArray.length) {
                typeOfBracket(strArray[k]);
                k++;
            } 
        }
        

        if (a+b+c+d!==0){
            answer=false;
        } else {     
            strArray[ind]='0';
            strArray[k-1]='0';
        }  
        return(strArray);
        
    }
    stringOfBracket=vertBracketChanger(stringOfBracket);
    brConfig=vertBracketChanger(brConfig);
    for (i=0;i<stringOfBracket.length;i++) {
        stringOfBracket=checker(i, stringOfBracket);
    }
    for (i=0;i<brConfig.length;i++) {
        brConfig=checker(i, brConfig);
    }
    return(answer);
}
