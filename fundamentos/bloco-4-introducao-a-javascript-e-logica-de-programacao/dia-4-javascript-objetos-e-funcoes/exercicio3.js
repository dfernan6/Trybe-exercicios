function verificaPalindrome(nome){
    for ( let index = 0 ; index <= nome.length ; index += 1){
        for ( let contador = nome.length - 1; contador >= 0 ; contador -= 1){
          let firstStringLetter = nome[index];
          let lastStringLetter = nome[contador];
       if ( firstStringLetter === lastStringLetter){
           let isPalindrome = true;
           return isPalindrome;
       } 
   if ( firstStringLetter !== lastStringLetter){
     isPalindrome = false;
           return isPalindrome;
   }
       
    }
   }
   }
   console.log(verificaPalindrome("aba"))
   // verificação de palindrome