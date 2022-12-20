/**
 * Returns the amount of times a string appears inside another string
 * 
 * A longer description or instructions...
 * 
 * @param {string} st - The string to be searched through
 * @param {string} sbt - The string to be found
 * @returns {number}
 */
module.exports.numberOf = (st, sbt) => {
    var count = 0;
    if(st.indexOf(sbt)>-1)
    {
        for(var x = 0; x < st.length; x++)
        {
            if(st.substring(x, x + sbt.length)==(sbt))
                count++;
        }
    }
    return count;
};

/**
 * Returns the last token separated by a space in a string
 * 
 * The method goes through the string and finds the last index of a space.
 * If there is no space inside the string, the method will return the string itself,
 *  but if there are multiple tokens, the method will continue to substring until there is only one token.
 * 
 * @param {string} st - The string to be searched through
 * @returns {string}
 */
module.exports.lastToken = (st) => {
    var str = st;
    while(str.indexOf(' ')>=0)
        str = str.substring(str.indexOf(' ')+1);
    return str;
}

/**
 * Returns the string reversed
 * 
 * @param {string} st - The string to be reversed
 * @returns {string}
 */
module.exports.reverse = (st) => {
    var str = "";
    for(var x = st.length-1; x >=0; x--)
        str+=st.charAt(x);
    return str;
}

/**
 * Returns the average length of all tokens in the string
 * 
 * @param {string} st - The string to be searched through
 */
module.exports.averageLength = (st) => {
    var strArr = st.split(" ");
    var total = 0;
    for(var x = 0; x < strArr.length; x++)
        total+=strArr[x].length;
    return total/strArr.length;
}

/**
 * Returns the number of vowels in the string ignoring case
 * 
 * @param {string} st - The string to be searched through
 * @returns {string}
 */
module.exports.vowelCount = (st) => {
    var count = 0;
    for(var x = 0; x < st.length; x++)
        if(st.charAt(x)=='a'||st.charAt(x)=='A'||st.charAt(x)=='e'||st.charAt(x)=='E'||
        st.charAt(x)=='i'||st.charAt(x)=='I'||st.charAt(x)=='o'||st.charAt(x)=='O'||st.charAt(x)=='u'||st.charAt(x)=='U')
            count++;
    return count;
}

/**
 * Returns the string formatted vertically
 * 
 * @param {string} st 
 * @returns {string}
 */
module.exports.vertical = (st) => {
    var str = "";
    for(var x = 0; x < st.length; x++)
    {
        str += st.charAt(x);
        if(x+1<st.length)
            str += "\n";
    }
    return str;
}

/**
 * Lexicographically sorts the characters in the string and returns the ordered string
 * 
 * @param {string} st 
 * @returns {string} 
 */
module.exports.lexicon = (st) => {
    var strArr = st.split("");
    var arr = quicksort(strArr);
    return arr.toString().replace(/,/g,'');
}


/**
 * Quicksort algorithm to sort an array
 * 
 * @param {Object[]} array 
 * @returns {Object[]}
 */
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  }

/**
 * Replaces characters and reverses the string and returns the encoded string
 * 
 * @param {string} st 
 * @returns {string}
 */
  module.exports.encode = (st) => {
      var str = "";
      for(var x = 0; x < st.length; x++)
      {
        if(st.charAt(x)=='e')
            str+='3';
        else if(st.charAt(x)=='g')
            str+='8';
        else if(st.charAt(x)=='s')
            str+='5';
        else if(st.charAt(x)=='b')
            str+='6';
        else if(st.charAt(x)==' ')
            str+='$';
        else
            str+=st.charAt(x);
      }
      str = this.reverse(str);
      return str;
  }

/**
 * Replaces characters and reverses the string and returns the decoded string
 * 
 * @param {string} st 
 * @returns {string}
 */
  module.exports.decode = (st) => {
        var str = "";
        for(var x = 0; x < st.length; x++)
        {
        if(st.charAt(x)=='3')
            str+='e';
        else if(st.charAt(x)=='8')
            str+='g';
        else if(st.charAt(x)=='5')
            str+='s';
        else if(st.charAt(x)=='6')
            str+='b';
        else if(st.charAt(x)=='$')
            str+=' ';
        else
            str+=st.charAt(x);
    }
    str = this.reverse(str);
    return str;
  }

/**
 * Returns the string without any spaces
 * 
 * @param {string} st 
 * @returns {string}
 */
  module.exports.removeSpace = (st) => {
      var str = ""
      for(var x of st)
      {
          if(x!=' ')
            str+=x;
      }
      return str;
  }