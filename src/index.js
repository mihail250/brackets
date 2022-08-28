module.exports = function check(str, bracketsConfig) {

  let objects = {};
  for (i = 0; i < bracketsConfig.length; i++) {
    objects[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }


   
  let opens = [];
  let closes = [];
  for (i = 0; i < bracketsConfig.length; i++ ) {
  opens.push(bracketsConfig[i][0])
  closes.push(bracketsConfig[i][1])
  }

    
    let same = str.split('|').length-1;
    if (same % 2 > 0) {
    return false
  }
   
  let stack = [];
  for (i = 0; i < str.length; i++){
    
    if (  stack.length !== 0 && objects[str[i]] === stack[stack.length-1] )  {
      stack.pop() 
      
       
    } else if (  opens.includes(str[i])) {
      stack.push(str[i]) 
    } else {
      return false
    }
    
    

  }
  return stack.length === 0 ? true : false ;
}

